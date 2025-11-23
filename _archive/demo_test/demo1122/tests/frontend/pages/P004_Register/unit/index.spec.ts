import { describe, it, expect } from 'vitest'
import { isValidPhone, isValidCode, isValidPassword, confirmPassword } from '../../../../../src/frontend/utils/registerUtils'

describe('[Feature:F008][Page:P004] 注册校验', () => {
  it('[@req:F008-S01] 手机号11位验证', () => {
    expect(isValidPhone('13800138000')).toBe(true)
    expect(isValidPhone('180013800')).toBe(false)
  })

  it('[@req:F008-S04] 验证码6位数字', () => {
    expect(isValidCode('123456')).toBe(true)
    expect(isValidCode('12345a')).toBe(false)
  })

  it('[@req:F008-S06] 密码8-20位', () => {
    expect(isValidPassword('abc12345')).toBe(true)
    expect(isValidPassword('abc')).toBe(false)
  })

  it('[@req:F008-S07] 密码包含字母数字', () => {
    expect(isValidPassword('abcd1234')).toBe(true)
    expect(isValidPassword('abcdefgh')).toBe(false)
  })

  it('[@req:F008-S09] 确认密码二次验证', () => {
    expect(confirmPassword('abc12345', 'abc12345')).toBe(true)
    expect(confirmPassword('abc12345', 'abc1234x')).toBe(false)
  })
})