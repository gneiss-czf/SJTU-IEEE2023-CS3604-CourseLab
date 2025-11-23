import { describe, it, expect } from 'vitest'
import { formatCountdown, isCritical, isExpired } from '../../../../../src/frontend/utils/orderCountdown'
import { saveDraft, loadDraft } from '../../../../../src/frontend/utils/draftStorage'

describe('[Feature:F009][Page:P005] 订单倒计时', () => {
  it('[@req:F009-S04] 显示15分钟倒计时', () => {
    expect(formatCountdown(15 * 60 * 1000)).toBe('15:00')
  })
  it('[@req:F009-S05] 少于5分钟红警', () => {
    expect(isCritical(4 * 60 * 1000)).toBe(true)
    expect(isCritical(6 * 60 * 1000)).toBe(false)
  })
  it('[@req:F009-S06] 超时自动释放座位提示', () => {
    expect(isExpired(-1)).toBe(true)
  })

  it('[@req:F009-S22] 临时保存草稿', () => {
    const draft = { from: '北京', to: '上海', date: '2025-12-20' }
    saveDraft(draft)
    const loaded = loadDraft()
    expect(loaded?.from).toBe('北京')
    expect(loaded?.to).toBe('上海')
    expect(loaded?.date).toBe('2025-12-20')
  })
})