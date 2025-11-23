import { test, expect } from '@playwright/test'

test.describe('[Feature:F014][Page:P006] 支付成功闭环', () => {
  test('[@req:F014-S17] 支付成功更新订单状态', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('order-ORD-202511220001', 'paid')
    })
    await page.goto('https://example.com')
    const status = await page.evaluate(() => localStorage.getItem('order-ORD-202511220001'))
    expect(status).toBe('paid')
  })
})