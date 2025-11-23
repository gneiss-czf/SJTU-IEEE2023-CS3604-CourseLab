import { describe, it, expect } from 'vitest'
import { isValidPhone, shouldEnableCaptcha, isValidCode, isCodeWithinExpiry, isFormValid } from '../../../../../src/frontend/utils/loginUtils'

describe('[Feature:F007][Page:P003] 登录校验', () => {
  it('[@req:F007-S05] 手机号格式验证', () => {
    expect(isValidPhone('13800138000')).toBe(true)
    expect(isValidPhone('23800138000')).toBe(false)
  })

  it('[@req:F007-S04] 连续失败启用验证码', () => {
    expect(shouldEnableCaptcha(2)).toBe(false)
    expect(shouldEnableCaptcha(3)).toBe(true)
  })

  it('[@req:F007-S07] 验证码输入6位', () => {
    expect(isValidCode('123456')).toBe(true)
    expect(isValidCode('12345a')).toBe(false)
  })

  it('[@req:F007-S08] 验证码有效期5分钟', () => {
    const now = Date.now()
    const created = now - 4 * 60 * 1000
    expect(isCodeWithinExpiry(created, now, 5)).toBe(true)
    const tooOld = now - 6 * 60 * 1000
    expect(isCodeWithinExpiry(tooOld, now, 5)).toBe(false)
  })

  it('[@req:F007-S11] 前端表单验证', () => {
    expect(isFormValid('13800138000', '123456')).toBe(true)
    expect(isFormValid('138', '1')).toBe(false)
  })
})