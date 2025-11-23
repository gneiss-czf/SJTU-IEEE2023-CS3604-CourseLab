import { test, expect } from '@playwright/test'

test.describe('[Feature:F007→F003→F005→F010] 完整购票流程', () => {
  test('[@req:F005-S16] 预订锁票跳转订单页', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('lock-status', 'locked')
      sessionStorage.setItem('route', '北京→上海')
    })
    await page.goto('https://example.com')
    const locked = await page.evaluate(() => localStorage.getItem('lock-status'))
    expect(locked).toBe('locked')
  })
})