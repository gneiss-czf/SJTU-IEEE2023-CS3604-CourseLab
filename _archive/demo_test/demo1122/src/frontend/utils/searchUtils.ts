export function fuzzyStationSearch(input: string, stations: string[]): string[] {
  const q = input.trim().toLowerCase()
  if (!q) return []
  return stations.filter(s => s.toLowerCase().includes(q)).slice(0, 10)
}

export function normalizeQuery(input: string): string {
  return input.trim().toLowerCase()
}