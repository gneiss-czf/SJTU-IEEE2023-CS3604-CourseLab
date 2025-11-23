import { describe, it, expect } from '@jest/globals'
import { sortByCreatedDesc, filterByStatus, filterByTimeRange, searchByKeyword, paginate } from '../../../../../src/backend/services/orderList'

describe('[Feature:F013] 订单列表规则', () => {
  it('[@req:F013-S10] 按创建时间倒序', () => {
    const list = [
      { id: '1', createdAt: 2 },
      { id: '2', createdAt: 3 },
      { id: '3', createdAt: 1 }
    ]
    const res = sortByCreatedDesc(list as any)
    expect(res.map(i => i.id)).toEqual(['2', '1', '3'])
  })
  it('[@req:F013-S01] 订单状态筛选规则', () => {
    const list = [
      { id: '1', createdAt: 1, status: '待支付' },
      { id: '2', createdAt: 2, status: '已支付' }
    ] as any
    const res = filterByStatus(list, '待支付')
    expect(res.map(i => i.id)).toEqual(['1'])
  })
  it('[@req:F013-S02] 时间范围筛选规则', () => {
    const list = [
      { id: '1', createdAt: 1 },
      { id: '2', createdAt: 100 }
    ] as any
    const res = filterByTimeRange(list, 50, 200)
    expect(res.map(i => i.id)).toEqual(['2'])
  })
  it('[@req:F013-S03] 订单号车次号搜索规则', () => {
    const list = [
      { id: 'ORD-001', createdAt: 1, route: '北京→上海' },
      { id: 'ORD-002', createdAt: 2, route: '上海→杭州' }
    ] as any
    const res = searchByKeyword(list, 'ORD-002')
    expect(res.map(i => i.id)).toEqual(['ORD-002'])
  })
  it('[@req:F013-S13] 每页10条规则', () => {
    const list = Array.from({ length: 25 }).map((_, i) => ({ id: `${i + 1}`, createdAt: i + 1 })) as any
    const page1 = paginate(list, 1, 10)
    const page3 = paginate(list, 3, 10)
    expect(page1.length).toBe(10)
    expect(page3.length).toBe(5)
  })
})