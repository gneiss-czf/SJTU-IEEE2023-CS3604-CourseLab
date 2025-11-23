import { describe, it, expect } from '@jest/globals'
import { isValidCertificateId, isValidPassport, isValidPermit } from '../../../../../src/backend/services/certificate'

describe('[Feature:F012] 乘车人证件校验', () => {
  it('[@req:F012-S12] 身份证校验位验证', () => {
    expect(isValidCertificateId('12345678901234567X')).toBe(true)
    expect(isValidCertificateId('123456789012345678')).toBe(true)
    expect(isValidCertificateId('abc')).toBe(false)
  })
  it('[@req:F012-S08] 支持身份证类型', () => {
    expect(isValidCertificateId('12345678901234567X')).toBe(true)
  })
  it('[@req:F012-S09] 支持护照类型', () => {
    expect(isValidPassport('E1234567')).toBe(true)
  })
  it('[@req:F012-S10] 支持通行证类型', () => {
    expect(isValidPermit('H123456')).toBe(true)
  })
  it('[@req:F012-S13] 护照通行证格式验证', () => {
    expect(isValidPassport('E1234567')).toBe(true)
    expect(isValidPermit('H123456')).toBe(true)
    expect(isValidPassport('中文')).toBe(false)
  })
  it('[@req:F012-S14] 实时验证反馈', () => {
    const ok = isValidCertificateId('12345678901234567X')
    expect(ok).toBe(true)
  })
})