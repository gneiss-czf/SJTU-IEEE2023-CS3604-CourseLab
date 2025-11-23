import http from 'http'
import { parse } from 'url'
import { createPaymentOrder, invokePayment, pollPaymentStatus } from './services/payment'
import { lockSeats } from './services/seatLock'
import { submitOrder } from './services/submitOrder'

type Ticket = { trainNo: string; available: boolean }

function send(res: http.ServerResponse, code: number, data: any) {
  res.statusCode = code
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.end(JSON.stringify(data))
}

function notFound(res: http.ServerResponse) {
  send(res, 404, { error: 'Not Found' })
}

function readBody(req: http.IncomingMessage): Promise<any> {
  return new Promise(resolve => {
    let buf = ''
    req.on('data', chunk => (buf += chunk))
    req.on('end', () => {
      try { resolve(buf ? JSON.parse(buf) : {}) } catch { resolve({}) }
    })
  })
}

const server = http.createServer(async (req, res) => {
  const { pathname, query } = parse(req.url || '', true)
  if (req.method === 'OPTIONS') return send(res, 200, {})

  // 简化：/api/search 与 /api/v1/tickets/trains 返回示例车次
  if (req.method === 'GET' && (pathname === '/api/search' || pathname === '/api/v1/tickets/trains')) {
    const items: Ticket[] = [
      { trainNo: 'G1', available: true },
      { trainNo: 'D2', available: false }
    ]
    return send(res, 200, items)
  }

  if (req.method === 'GET' && (pathname === '/api/trains' || pathname === '/api/trains/search')) {
    const items: Ticket[] = [
      { trainNo: 'G1', available: true },
      { trainNo: 'D2', available: false }
    ]
    return send(res, 200, { success: true, data: items })
  }

  // 站点模糊搜索
  if (req.method === 'GET' && pathname === '/api/v1/stations/suggest') {
    const q = (query?.q as string || '').toLowerCase()
    const stations = ['Beijing', 'Shanghai', 'Shenzhen', 'Hangzhou']
    const resList = q ? stations.filter(s => s.toLowerCase().includes(q)).slice(0, 10) : []
    return send(res, 200, resList)
  }

  // 预锁座位
  if (req.method === 'POST' && pathname === '/api/v1/orders/prelock') {
    const body = await readBody(req)
    const lock = lockSeats(Number(body.count || 1), Date.now())
    return send(res, 200, { lockId: lock.lockId, expireIn: 15 * 60 })
  }

  if (req.method === 'POST' && pathname === '/api/orders/prelock') {
    const body = await readBody(req)
    const lock = lockSeats(Number(body.count || 1), Date.now())
    return send(res, 200, { success: true, data: { lockId: lock.lockId, expireIn: 15 * 60 } })
  }

  // 创建订单
  if (req.method === 'POST' && pathname === '/api/v1/orders/create') {
    const body = await readBody(req)
    try {
      const result = submitOrder({ from: '北京', to: '上海', date: '2025-12-20', seatClass: '一等座', passengers: body.passengers || [{ name: '张三', id: '110' }] }, 555, 0)
      return send(res, 201, { orderId: result.orderId, totalAmount: result.totalPrice, paymentDeadline: '30:00' })
    } catch {
      return send(res, 400, { error: '订单信息错误' })
    }
  }

  if (req.method === 'POST' && pathname === '/api/orders') {
    const body = await readBody(req)
    try {
      const result = submitOrder({ from: body.from || '北京', to: body.to || '上海', date: body.date || '2025-12-20', seatClass: body.seatClass || '一等座', passengers: body.passengers || [{ name: '张三', id: '110' }] }, 555, 0)
      return send(res, 201, { success: true, data: { orderId: result.orderId, status: 'PENDING_PAYMENT', totalAmount: result.totalPrice, paymentDeadline: new Date(Date.now() + 30 * 60 * 1000).toISOString() } })
    } catch {
      return send(res, 400, { success: false, message: '订单信息错误' })
    }
  }

  // 支付发起/状态/回调（简化）
  if (req.method === 'POST' && pathname === '/api/v1/payments/initiate') {
    const body = await readBody(req)
    const pay = createPaymentOrder(Number(body.amount || 0))
    const invoke = invokePayment('wechat', body.orderId || 'ORD-TEST', pay.amount)
    return send(res, 200, { paymentId: pay.id, paymentUrl: invoke.url })
  }
  if (req.method === 'POST' && pathname === '/api/payments/initiate') {
    const body = await readBody(req)
    const pay = createPaymentOrder(Number(body.amount || 0))
    const invoke = invokePayment((body.paymentMethod as any) || 'wechat', body.orderId || 'ORD-TEST', pay.amount)
    return send(res, 200, { success: true, data: { paymentId: pay.id, paymentUrl: invoke.url } })
  }
  if (req.method === 'GET' && pathname?.startsWith('/api/v1/payments/') && pathname?.endsWith('/status')) {
    const status = pollPaymentStatus(3)
    return send(res, 200, { status: status.status })
  }
  if (req.method === 'POST' && pathname === '/api/v1/payments/callback') {
    return send(res, 200, { message: 'success' })
  }
  if (req.method === 'POST' && pathname === '/api/payments/callback') {
    return send(res, 200, { success: true, message: '回调处理成功' })
  }

  // 登录/注册/登出（简化）
  if (req.method === 'POST' && pathname === '/api/v1/auth/login/sms') {
    return send(res, 200, { token: `token-${Date.now()}`, userId: 'user001' })
  }
  if (req.method === 'POST' && pathname === '/api/auth/login') {
    return send(res, 200, { success: true, message: '登录成功', data: { userId: 'user001', token: `token-${Date.now()}`, user: { phone: '13800138000', realName: '张三', idNumber: '110xxxxxxxxxxxxxxx' } } })
  }
  if (req.method === 'POST' && pathname === '/api/v1/auth/register') {
    return send(res, 201, { userId: `U-${Date.now()}`, token: `token-${Date.now()}` })
  }
  if (req.method === 'POST' && pathname === '/api/auth/register') {
    return send(res, 201, { success: true, message: '注册成功', data: { userId: `U-${Date.now()}`, token: `token-${Date.now()}` } })
  }
  if (req.method === 'POST' && pathname === '/api/v1/auth/logout') {
    return send(res, 200, { message: '已退出' })
  }
  if (req.method === 'POST' && pathname === '/api/auth/logout') {
    return send(res, 200, { success: true, message: '退出登录' })
  }

  // 个人资料
  if (req.method === 'GET' && pathname === '/api/v1/user/profile') {
    return send(res, 200, { uid: 'user001', nick: '张三', avatar: 'https://example.com/avatar.png', vip: 'Lv3' })
  }
  if (req.method === 'GET' && pathname === '/api/user/profile') {
    return send(res, 200, { success: true, data: { uid: 'user001', nick: '张三', avatar: 'https://example.com/avatar.png', vip: 'Lv3' } })
  }

  if (req.method === 'GET' && pathname?.startsWith('/api/orders/user/')) {
    const uid = pathname.split('/').pop() || 'user001'
    const list = [
      { id: '202511220001', route: '北京→上海', departTime: '2025-12-20 09:00', passengers: 2, amount: 555, status: '待支付' },
      { id: '202511210001', route: '上海→杭州', departTime: '2025-12-19 08:00', passengers: 1, amount: 200, status: '已支付' }
    ]
    return send(res, 200, { success: true, data: { userId: uid, items: list, total: list.length } })
  }

  // 首页快捷入口与查询历史
  if (req.method === 'GET' && pathname === '/api/v1/home/quick-entries') {
    const entries = ['车票查询', '我的订单', '帮助']
    return send(res, 200, { entries })
  }
  if (req.method === 'GET' && pathname === '/api/v1/query/history') {
    const history = [
      { from: '北京', to: '上海', date: '2025-12-20' },
      { from: '上海', to: '杭州', date: '2025-12-19' },
      { from: '深圳', to: '广州', date: '2025-12-18' }
    ]
    return send(res, 200, { history: history.slice(0, 5) })
  }
  if (req.method === 'DELETE' && pathname === '/api/v1/query/history') {
    return send(res, 200, { message: '已清空' })
  }

  return notFound(res)
})

const port = Number(process.env.PORT || 3000)
server.listen(port, () => {
  console.log(`[backend] listening on http://localhost:${port}`)
})