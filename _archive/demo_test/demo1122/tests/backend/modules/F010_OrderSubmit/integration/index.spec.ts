import { describe, it, expect } from '@jest/globals'
import { submitOrder } from '../../../../../src/backend/services/submitOrder'
import { lockSeats } from '../../../../../src/backend/services/seatLock'
import { createOrderRecord } from '../../../../../src/backend/services/orderRepo'

describe('[Feature:F010] 提交订单集成', () => {
  it('[@req:F010-S06] 生成唯一订单号', () => {
    const res = submitOrder({ from: 'B', to: 'S', date: '2025-12-20', seatClass: '1st', passengers: [{ name: 'A', id: '12345678901234567X' }] }, 100)
    expect(res.orderId).toMatch(/^ORD-/)
  })

  it('[@req:F010-S07] 锁定座位资源', () => {
    const lock = lockSeats(2, Date.now())
    expect(lock.lockId).toMatch(/^LOCK-/)
    expect(lock.seats).toBe(2)
  })

  it('[@req:F010-S08] 创建订单记录关联乘车人', () => {
    const rec = createOrderRecord(2)
    expect(rec.id).toMatch(/^REC-/)
    expect(rec.passengerCount).toBe(2)
  })

  it('[@req:F010-S09] 设置支付超时30分钟', () => {
    const rec = createOrderRecord(1, 30)
    expect(rec.payTimeoutMinutes).toBe(30)
  })
})