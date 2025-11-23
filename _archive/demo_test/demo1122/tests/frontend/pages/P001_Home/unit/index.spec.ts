import { describe, it, expect } from 'vitest'
import { requiresAuth, canAccess } from '../../../../../src/frontend/utils/authGuard'
import { getQuickEntries, calcGreeting } from '../../../../../src/frontend/services/home'

describe('[Feature:F001][Page:P001] 登录态守卫', () => {
  it('[@req:F001-S09] 个人页需登录', () => {
    expect(requiresAuth('/profile')).toBe(true)
    expect(canAccess('/profile', false)).toBe(false)
    expect(canAccess('/profile', true)).toBe(true)
  })
})

describe('[Feature:F002][Page:P001] 首页服务', () => {
  it('[@req:F002-S08] 获取快捷入口列表', () => {
    expect(getQuickEntries().length).toBeGreaterThan(0)
  })
  it('[@req:F002-S09] 问候语计算', () => {
    expect(calcGreeting(9)).toBe('上午好')
    expect(calcGreeting(21)).toBe('晚上好')
  })
})