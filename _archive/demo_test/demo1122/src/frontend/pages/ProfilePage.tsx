import { useState } from 'react'

type Passenger = { name: string; phone?: string; type: string; default?: boolean }
type OrderCard = { id: string; route: string; departTime: string; passengers: number; amount: number; status: string }

export default function ProfilePage() {
  const [user, setUser] = useState('user001')
  const [oldPwd, setOldPwd] = useState('')
  const [newPwd, setNewPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const strong = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(newPwd)
  const passengers: Passenger[] = [
    { name: '张三', phone: '13800138000', type: '成人', default: true },
    { name: '李四', type: '学生' }
  ]
  const orders: OrderCard[] = [
    { id: '202511220001', route: '北京→上海', departTime: '2025-12-20 09:00', passengers: 2, amount: 555, status: '待支付' },
    { id: '202511210001', route: '上海→杭州', departTime: '2025-12-19 08:00', passengers: 1, amount: 200, status: '已支付' }
  ]
  const payDeadline = '30:00'
  const logout = () => { setUser('') }
  const safeLogout = () => { setUser('') }
  const confirmLogout = () => { setUser('') }

  const page: React.CSSProperties = { marginTop: 80, padding: '24px 32px', background: '#f6f8fb', minHeight: '100vh' }
  const grid: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }
  const card: React.CSSProperties = { background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 16 }
  const infoGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }
  const badge: React.CSSProperties = { background: '#e3f2fd', color: '#0d47a1', borderRadius: 12, padding: '4px 10px', fontSize: 12, fontWeight: 700 }
  const input: React.CSSProperties = { height: 36, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px', width: '100%' }
  const list: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr', gap: 12 }
  const row: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto auto auto', alignItems: 'center', gap: 12, background: '#fafafa', borderRadius: 8, padding: '12px 16px' }
  const orderRow: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'auto 1fr auto auto auto auto auto auto', alignItems: 'center', gap: 12, background: '#fafafa', borderRadius: 8, padding: '12px 16px' }
  const action: React.CSSProperties = { height: 32, borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', padding: '0 12px' }

  return (
    <div style={page}>
      <div style={grid}>
        <section style={card}>
          <div style={infoGrid}>
            <div aria-label="username">{user}</div>
            <div aria-label="realname">张三</div>
            <div aria-label="idMasked">110************1234</div>
            <div aria-label="phoneMasked">138****8000</div>
            <div aria-label="emailMasked">u***@mail.com</div>
            <div aria-label="regTime">2020-01-01</div>
            <div aria-label="lastLogin">2025-11-22</div>
            <div aria-label="level">Lv3 1024</div>
          </div>
          <div aria-label="realnameStatus" style={badge}>已实名</div>
        </section>
        <section style={card} aria-label="password-panel">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 12 }}>
            <input aria-label="oldPassword" value={oldPwd} onChange={e => setOldPwd(e.target.value)} style={input} />
            <input aria-label="newPassword" value={newPwd} onChange={e => setNewPwd(e.target.value)} style={input} />
            <input aria-label="confirmPassword" value={confirmPwd} onChange={e => setConfirmPwd(e.target.value)} style={input} />
            <div aria-label="pwdStrength" style={{ alignSelf: 'center', fontWeight: 700 }}>{strong ? '强' : '弱'}</div>
          </div>
        </section>
      </div>

      <div style={grid}>
        <section style={card} aria-label="passenger-list">
          <div style={list}>
            {passengers.map(p => (
              <div key={p.name} aria-label="passenger-card" data-default={!!p.default} style={row}>
                <span aria-label="passenger-name">{p.name}</span>
                {p.phone && <span aria-label="passenger-phone">{p.phone}</span>}
                <span aria-label="passenger-type">{p.type}</span>
                <button aria-label="set-default" style={action}>设为默认</button>
                <button aria-label="edit" style={action}>编辑</button>
                <button aria-label="delete" style={action}>删除</button>
              </div>
            ))}
          </div>
        </section>
        <section style={card} aria-label="order-list">
          <div style={list}>
            {orders.map(o => (
              <div key={o.id} aria-label="order-card" style={orderRow}>
                <span aria-label="order-no">{o.id}</span>
                <span aria-label="route">{o.route}</span>
                <span aria-label="depart-time">{o.departTime}</span>
                <span aria-label="passenger-count">{o.passengers}</span>
                <span aria-label="amount">{o.amount}</span>
                <span aria-label="status-tag">{o.status}</span>
                <button aria-label="pay-now" style={action}>立即支付</button>
                <button aria-label="cancel-order" style={action}>取消订单</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section style={{ ...card, display: 'grid', gridTemplateColumns: 'auto auto auto auto auto', alignItems: 'center', gap: 12 }} aria-label="payment-panel">
        <span aria-label="pay-order-id">ORD-202511220001</span>
        <span aria-label="pay-amount">555</span>
        <span aria-label="pay-countdown">{payDeadline}</span>
        <button aria-label="nav-logout" onClick={logout} style={action}>退出登录</button>
        <button aria-label="profile-logout" onClick={safeLogout} style={action}>安全退出</button>
      </section>

      <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        <button aria-label="logout-confirm" onClick={confirmLogout} style={action}>登出确认</button>
      </div>
    </div>
  )
}