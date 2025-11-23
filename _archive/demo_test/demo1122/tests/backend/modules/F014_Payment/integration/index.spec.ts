import { describe, it, expect } from '@jest/globals'
import { createPaymentOrder, isPaymentExpired, invokePayment, pollPaymentStatus } from '../../../../../src/backend/services/payment'

describe('[Feature:F014] 支付流程', () => {
  it('[@req:F014-S03] 支付倒计时30分钟', () => {
    const pay = createPaymentOrder(100)
    expect(isPaymentExpired(pay.createdAt, pay.createdAt + 29 * 60 * 1000)).toBe(false)
    expect(isPaymentExpired(pay.createdAt, pay.createdAt + 31 * 60 * 1000)).toBe(true)
  })

  it('[@req:F014-S06] 创建支付订单包含金额', () => {
    const pay = createPaymentOrder(200)
    expect(pay.amount).toBe(200)
  })
  it('[@req:F014-S13] 创建支付订单返回前缀', () => {
    const pay = createPaymentOrder(300)
    expect(pay.id.startsWith('PAY-')).toBe(true)
  })
  it('[@req:F014-S12] 倒计时30分钟内未过期', () => {
    const created = Date.now()
    const now = created + 20 * 60 * 1000
    expect(isPaymentExpired(created, now, 30)).toBe(false)
  })
  it('[@req:F014-S14] 跳转第三方支付链接', () => {
    const res = invokePayment('wechat', 'ORD-001', 200)
    expect(res.url).toContain('wechat')
  })
  it('[@req:F014-S01] 微信扫码支付链接', () => {
    const res = invokePayment('wechat', 'ORD-002', 100)
    expect(res.url).toContain('pay.wechat.com/q')
  })
  it('[@req:F014-S02] 微信APP支付链接', () => {
    const res = invokePayment('wechat_app', 'ORD-003', 120)
    expect(res.url).toContain('weixin://app/pay')
  })
  it('[@req:F014-S04] 支付宝APP支付链接', () => {
    const res = invokePayment('alipay_app', 'ORD-004', 130)
    expect(res.url).toContain('alipay://app?order')
  })
  it('[@req:F014-S05] 银行卡快捷支付链接', () => {
    const res = invokePayment('bank_card', 'ORD-005', 140)
    expect(res.url).toContain('bank.example/pay')
  })
  it('[@req:F014-S16] 支付状态轮询成功', () => {
    const s1 = pollPaymentStatus(1)
    const s3 = pollPaymentStatus(3)
    expect(s1.status).toBe('pending')
    expect(s3.status).toBe('success')
  })
})