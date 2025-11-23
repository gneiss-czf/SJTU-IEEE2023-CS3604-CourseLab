import { describe, it, expect } from 'vitest'
import { clearToken, clearSession, logLogout } from '../../../../../src/frontend/utils/logoutUtils'

describe('[Feature:F016][Page:P006] 登出逻辑', () => {
  it('[@req:F016-S04] 清除本地token', () => {
    localStorage.setItem('token', 'abc')
    clearToken()
    expect(localStorage.getItem('token')).toBeNull()
  })
  it('[@req:F016-S05] 清除session与缓存', () => {
    sessionStorage.setItem('x', 'y')
    clearSession()
    expect(sessionStorage.getItem('x')).toBeNull()
  })
  it('[@req:F016-S06] 记录登出日志', () => {
    const id = logLogout('user001')
    expect(id.startsWith('logout-user001-')).toBe(true)
  })
})