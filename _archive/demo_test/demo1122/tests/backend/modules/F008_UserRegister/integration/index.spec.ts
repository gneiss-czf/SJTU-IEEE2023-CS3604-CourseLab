import { describe, it, expect } from '@jest/globals'
import { isPhoneRegistered, createAccount } from '../../../../../src/backend/services/register'

describe('[Feature:F008] 用户注册后端', () => {
  it('[@req:F008-S02] 检查手机号是否已注册', () => {
    const phone = '13800138000'
    expect(isPhoneRegistered(phone)).toBe(false)
    createAccount(phone, 'Abc12345')
    expect(isPhoneRegistered(phone)).toBe(true)
  })

  it('[@req:F008-S17] 前端校验后创建账户', () => {
    const res = createAccount('13800138001', 'Abc12345')
    expect(res.id.startsWith('U-')).toBe(true)
    expect(res.phone).toBe('13800138001')
  })
})