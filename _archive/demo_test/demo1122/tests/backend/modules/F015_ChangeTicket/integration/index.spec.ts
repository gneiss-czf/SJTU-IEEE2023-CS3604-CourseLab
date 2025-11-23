import { describe, it, expect } from '@jest/globals'
import { createChangeOrder, calcDiff } from '../../../../../src/backend/services/changeTicket'

describe('[Feature:F015] 改签流程集成', () => {
  it('[@req:F015-S15] 生成改签订单', () => {
    const diff = calcDiff(200, 250)
    const chg = createChangeOrder('ORD-001', diff)
    expect(chg.id.startsWith('CHG-')).toBe(true)
    expect(chg.orderId).toBe('ORD-001')
  })
  it('[@req:F015-S16] 改签后退差价', () => {
    const diff = calcDiff(300, 200)
    expect(diff).toBe(-100)
  })
})