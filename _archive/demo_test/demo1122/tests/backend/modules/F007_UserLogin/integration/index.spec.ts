import { describe, it, expect } from '@jest/globals'
import { checkCredentials, generateToken } from '../../../../../src/backend/services/auth'

describe('[Feature:F007] 用户登录后端', () => {
  it('[@req:F007-S12] 后端凭证校验', () => {
    expect(checkCredentials('user001', 'P@ssw0rd')).toBe(true)
    expect(checkCredentials('user001', 'wrong')).toBe(false)
  })

  it('[@req:F007-S13] 生成会话token', () => {
    const token = generateToken('user001')
    expect(token.startsWith('token-user001-')).toBe(true)
  })
})