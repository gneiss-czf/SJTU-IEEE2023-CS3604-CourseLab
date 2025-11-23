export type Order = { id: string; createdAt: number; status?: string; route?: string }

export function sortByCreatedDesc(list: Order[]): Order[] {
  return [...list].sort((a, b) => b.createdAt - a.createdAt)
}

export function filterByStatus(list: Order[], status: string): Order[] {
  if (!status || status === '全部') return list
  return list.filter(o => o.status === status)
}

export function filterByTimeRange(list: Order[], start: number, end: number): Order[] {
  return list.filter(o => o.createdAt >= start && o.createdAt <= end)
}

export function searchByKeyword(list: Order[], keyword: string): Order[] {
  if (!keyword) return list
  const k = keyword.toLowerCase()
  return list.filter(o => o.id.toLowerCase().includes(k) || (o.route ?? '').toLowerCase().includes(k))
}

export function paginate(list: Order[], page: number, pageSize = 10): Order[] {
  const start = (page - 1) * pageSize
  return list.slice(start, start + pageSize)
}