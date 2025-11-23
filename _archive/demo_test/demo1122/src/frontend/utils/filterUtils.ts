export type Ticket = {
  trainType: string
  departHour: number
  seatClass?: string
  durationMinutes?: number
  price?: number
  from?: string
  to?: string
}

export function filterByTrainType(list: Ticket[], types: string[]): Ticket[] {
  if (!types.length) return list
  const set = new Set(types.map(t => t.toUpperCase()))
  return list.filter(t => set.has(t.trainType.toUpperCase()))
}

export function filterByTimeRange(list: Ticket[], startHour: number, endHour: number): Ticket[] {
  return list.filter(t => t.departHour >= startHour && t.departHour <= endHour)
}

export function filterBySeatClass(list: Ticket[], seatClass: string): Ticket[] {
  if (!seatClass) return list
  return list.filter(t => t.seatClass === seatClass)
}

export function filterByDuration(list: Ticket[], min: number, max: number): Ticket[] {
  return list.filter(t => {
    const d = t.durationMinutes ?? 0
    return d >= min && d <= max
  })
}

export function filterByPrice(list: Ticket[], min: number, max: number): Ticket[] {
  return list.filter(t => {
    const p = t.price ?? 0
    return p >= min && p <= max
  })
}

export function filterByStations(list: Ticket[], stations: string[]): Ticket[] {
  if (!stations.length) return list
  const set = new Set(stations.map(s => s.toLowerCase()))
  return list.filter(t => !!t.from && set.has(t.from.toLowerCase()))
}