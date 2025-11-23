import { describe, it, expect } from '@jest/globals'
import { startPay, cancelOrder } from '../../../../../src/backend/services/orderOps'

describe('[Feature:F013] 订单列表操作集成', () => {
  it('[@req:F013-S23] 跳转支付', () => {
    const res = startPay('ORD-001')
    expect(res.redirectTo).toBe('payment:ORD-001')
  })
  it('[@req:F013-S24] 取消订单确认', () => {
    const res = cancelOrder('ORD-001')
    expect(res.status).toBe('cancelled')
  })
})