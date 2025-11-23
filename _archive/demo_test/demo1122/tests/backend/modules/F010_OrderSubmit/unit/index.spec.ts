import { describe, it, expect } from '@jest/globals'
import { hasRequiredFields } from '../../../../../src/backend/services/orderValidation'
import { isValidCertificateId } from '../../../../../src/backend/services/certificate'
import { submitOrder } from '../../../../../src/backend/services/submitOrder'

describe('[Feature:F010] 提交订单前校验', () => {
  it('[@req:F010-S01] 检查必填项完整', () => {
    expect(hasRequiredFields({} as any)).toBe(false)
    expect(hasRequiredFields({ from: 'B', to: 'S', date: '2025-12-20', seatClass: '1st', passengers: [{ name: 'A', id: '12345678901234567X' }] })).toBe(true)
  })

  it('[@req:F010-S02] 证件号格式验证', () => {
    expect(isValidCertificateId('12345678901234567X')).toBe(true)
    expect(isValidCertificateId('123')).toBe(false)
  })

  it('[@req:F010-S03] 确认订单未超时', () => {
    const res = submitOrder({ from: 'B', to: 'S', date: '2025-12-20', seatClass: '1st', passengers: [{ name: 'A', id: '12345678901234567X' }] }, 100)
    expect(res.orderId).toMatch(/^ORD-/)
  })

  it('[@req:F010-S05] 计算总价含保险', () => {
    const res = submitOrder({ from: 'B', to: 'S', date: '2025-12-20', seatClass: '1st', passengers: [{ name: 'A', id: '12345678901234567X' }, { name: 'B', id: '12345678901234567X' }] }, 200, 30)
    expect(res.totalPrice).toBe(430)
  })
})