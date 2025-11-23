import { describe, it, expect } from 'vitest'
import { fuzzyStationSearch } from '../../../../../src/frontend/utils/searchUtils'
import { isDateInRange, isPastDate } from '../../../../../src/frontend/utils/dateUtils'
import { filterByTrainType, filterByTimeRange, filterBySeatClass, filterByDuration, filterByPrice, filterByStations } from '../../../../../src/frontend/utils/filterUtils'
import { validateFromTo, onlyAvailableFilter } from '../../../../../src/frontend/utils/searchRules'
import { suggestTransfers, withinTransferWindow } from '../../../../../src/frontend/utils/transferUtils'
import { hasStock } from '../../../../../src/frontend/utils/ticketStock'
import { isPassengerCountValid } from '../../../../../src/frontend/utils/passengerRules'
import { canSubmit } from '../../../../../src/frontend/utils/submitRules'

describe('[Feature:F003][Page:P002] 车票查询', () => {
  it('[@req:F003-S01] 站点模糊搜索', () => {
    const stations = ['Beijing', 'Shanghai', 'Shenzhen']
    const res = fuzzyStationSearch('sh', stations)
    expect(res).toContain('Shanghai')
    expect(res).toContain('Shenzhen')
  })

  it('[@req:F003-S05] 日期选择30天内', () => {
    const now = new Date()
    const inRange = new Date(now.getTime() + 10 * 24 * 3600 * 1000)
    expect(isDateInRange(inRange, 30)).toBe(true)
  })

  it('[@req:F003-S05] 日期超出30天拦截', () => {
    const now = new Date()
    const outRange = new Date(now.getTime() + 45 * 24 * 3600 * 1000)
    expect(isDateInRange(outRange, 30)).toBe(false)
  })

  it('[@req:F003-S06] 快捷日期选择', () => {
    const now = new Date()
    const inSeven = new Date(now.getTime() + 7 * 24 * 3600 * 1000)
    expect(isDateInRange(inSeven, 30)).toBe(true)
  })

  it('[@req:F003-S08] 禁用过去日期', () => {
    const past = new Date(new Date().getTime() - 24 * 3600 * 1000)
    expect(isPastDate(past)).toBe(true)
  })

  it('[@req:F003-S21] 出发地目的地不相同', () => {
    expect(validateFromTo('Beijing', 'Shanghai')).toBe(true)
    expect(validateFromTo('Beijing', 'beijing')).toBe(false)
  })
})

describe('[Feature:F004][Page:P002] 查询筛选', () => {
  it('[@req:F004-S01] 类型筛选：G', () => {
    const list = [
      { trainType: 'G', departHour: 9 },
      { trainType: 'D', departHour: 10 }
    ]
    const res = filterByTrainType(list as any, ['G'])
    expect(res.length).toBe(1)
    expect(res[0].trainType).toBe('G')
  })

  it('[@req:F004-S04] 时间段筛选', () => {
    const list = [
      { trainType: 'G', departHour: 9 },
      { trainType: 'D', departHour: 15 }
    ]
    const res = filterByTimeRange(list as any, 8, 12)
    expect(res.length).toBe(1)
    expect(res[0].departHour).toBe(9)
  })

  it('[@req:F003-S09] 车次类型筛选', () => {
    const list = [
      { trainType: 'G', departHour: 9 },
      { trainType: 'D', departHour: 10 }
    ]
    const res = filterByTrainType(list as any, ['D'])
    expect(res.length).toBe(1)
    expect(res[0].trainType).toBe('D')
  })

  it('[@req:F003-S10] 出发时间段筛选', () => {
    const list = [
      { trainType: 'G', departHour: 7 },
      { trainType: 'D', departHour: 20 }
    ]
    const res = filterByTimeRange(list as any, 18, 22)
    expect(res.length).toBe(1)
    expect(res[0].departHour).toBe(20)
  })

  it('[@req:F003-S11] 仅显示有票开关', () => {
    const tickets = [{ available: true }, { available: false }]
    const res = onlyAvailableFilter(true, tickets as any)
    expect(res.length).toBe(1)
    expect(res[0].available).toBe(true)
  })

  it('[@req:F003-S11] 仅显示有票无结果', () => {
    const tickets = [{ available: false }, { available: false }]
    const res = onlyAvailableFilter(true, tickets as any)
    expect(res.length).toBe(0)
  })

  it('[@req:F005-S02] 余票校验', () => {
    expect(hasStock(1)).toBe(true)
    expect(hasStock(0)).toBe(false)
  })

  it('[@req:F005-S03] 乘客数量规则', () => {
    expect(isPassengerCountValid(1, 5)).toBe(true)
    expect(isPassengerCountValid(0, 5)).toBe(false)
  })

  it('[@req:F005-S15] 提交前规则', () => {
    expect(canSubmit({ passengers: 0, seatClass: '1st' })).toBe(false)
    expect(canSubmit({ passengers: 2, seatClass: '1st' })).toBe(true)
  })
})

describe('[Feature:F004][Page:P002] 查询筛选扩展', () => {
  it('[@req:F004-S02] 类型筛选：D/C', () => {
    const list = [
      { trainType: 'C', departHour: 9 },
      { trainType: 'D', departHour: 10 },
      { trainType: 'G', departHour: 11 }
    ]
    const res = filterByTrainType(list as any, ['C', 'D'])
    expect(res.length).toBe(2)
  })

  it('[@req:F004-S08] 席别筛选', () => {
    const list = [
      { trainType: 'G', departHour: 9, seatClass: '1st' },
      { trainType: 'G', departHour: 10, seatClass: '2nd' }
    ]
    const res = filterBySeatClass(list as any, '1st')
    expect(res.length).toBe(1)
    expect(res[0].seatClass).toBe('1st')
  })

  it('[@req:F004-S12] 历时范围', () => {
    const list = [
      { trainType: 'G', departHour: 9, durationMinutes: 100 },
      { trainType: 'G', departHour: 10, durationMinutes: 300 }
    ]
    const res = filterByDuration(list as any, 120, 240)
    expect(res.length).toBe(0)
    const res2 = filterByDuration(list as any, 90, 200)
    expect(res2.length).toBe(1)
  })

  it('[@req:F004-S12] 历时范围负数拦截', () => {
    const list = [
      { trainType: 'G', departHour: 9, durationMinutes: 100 },
      { trainType: 'G', departHour: 10, durationMinutes: 300 }
    ]
    const res = filterByDuration(list as any, -10, -20)
    expect(res.length).toBe(0)
  })

  it('[@req:F004-S13] 价格区间', () => {
    const list = [
      { trainType: 'G', departHour: 9, price: 200 },
      { trainType: 'G', departHour: 10, price: 500 }
    ]
    const res = filterByPrice(list as any, 100, 300)
    expect(res.length).toBe(1)
    expect(res[0].price).toBe(200)
  })

  it('[@req:F004-S13] 价格区间下限>上限', () => {
    const list = [
      { trainType: 'G', departHour: 9, price: 200 },
      { trainType: 'G', departHour: 10, price: 500 }
    ]
    const res = filterByPrice(list as any, 500, 100)
    expect(res.length).toBe(0)
  })

  it('[@req:F004-S10] 多站点筛选', () => {
    const list = [
      { trainType: 'G', departHour: 9, from: 'Beijing' },
      { trainType: 'G', departHour: 10, from: 'Shanghai' }
    ]
    const res = filterByStations(list as any, ['Shanghai'])
    expect(res.length).toBe(1)
  })

  it('[@req:F003-S10] 无效出发时间段', () => {
    const list = [
      { trainType: 'G', departHour: 9 },
      { trainType: 'D', departHour: 10 }
    ]
    const res = filterByTimeRange(list as any, 25, 26)
    expect(res.length).toBe(0)
  })
})

describe('[Feature:F006][Page:P002] 换乘推荐', () => {
  it('[@req:F006-S05] 换乘时间范围', () => {
    const plan = { from: 'A', to: 'B', firstDepartHour: 9, secondDepartHour: 12, totalMinutes: 180 }
    expect(withinTransferWindow(plan as any, 120, 240)).toBe(true)
    expect(withinTransferWindow(plan as any, 200, 240)).toBe(false)
  })

  it('[@req:F006-S06] 生成中转方案', () => {
    const res = suggestTransfers('A', 'B', { limit: 1 })
    expect(res.length).toBe(1)
  })

  it('[@req:F006-S04] 中转耗时筛选', () => {
    const plan = { from: 'A', to: 'B', firstDepartHour: 9, secondDepartHour: 12, totalMinutes: 180 }
    expect(withinTransferWindow(plan as any, 100, 200)).toBe(true)
    expect(withinTransferWindow(plan as any, 200, 300)).toBe(false)
  })

  it('[@req:F006-S07] 无效出发地目的地', () => {
    const res = suggestTransfers('A', 'a')
    expect(res.length).toBe(0)
  })
})