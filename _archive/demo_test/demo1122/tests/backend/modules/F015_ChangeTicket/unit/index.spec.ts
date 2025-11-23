import { describe, it, expect } from '@jest/globals'
import { isEligible, checkType, checkTimes, checkTimeWindow, calcDiff } from '../../../../../src/backend/services/changeTicket'

describe('[Feature:F015] 改签规则', () => {
  it('[@req:F015-S01] 改签资格规则', () => {
    const now = Date.now()
    const depart = now + 25 * 60 * 60 * 1000
    expect(isEligible(depart, now)).toBe(true)
    const departSoon = now + 10 * 60 * 60 * 1000
    expect(isEligible(departSoon, now)).toBe(false)
  })
  it('[@req:F015-S02] 票种校验规则', () => {
    expect(checkType('成人', '学生')).toBe(true)
    expect(checkType('成人', '外籍')).toBe(false)
  })
  it('[@req:F015-S03] 改签次数限制规则', () => {
    const now = Date.now()
    const depart = now + 24 * 60 * 60 * 1000
    const newDepart = now + 26 * 60 * 60 * 1000
    expect(checkTimes(depart, newDepart, now)).toBe(true)
  })
  it('[@req:F015-S04] 改签时间窗规则', () => {
    const now = Date.now()
    const departNear = now + 60 * 60 * 1000
    const departOk = now + 3 * 60 * 60 * 1000
    expect(checkTimeWindow(departNear, now)).toBe(false)
    expect(checkTimeWindow(departOk, now)).toBe(true)
  })
  it('[@req:F015-S18] 价格差额计算', () => {
    expect(calcDiff(200, 300)).toBe(100)
    expect(calcDiff(300, 200)).toBe(-100)
  })
})