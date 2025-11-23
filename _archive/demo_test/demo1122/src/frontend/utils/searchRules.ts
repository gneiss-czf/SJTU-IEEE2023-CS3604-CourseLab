export function validateRequiredFields(payload: { from?: string; to?: string; date?: string }): boolean {
  const { from, to, date } = payload
  return !!from && !!to && !!date
}

export function validateFromTo(from: string, to: string): boolean {
  return !!from && !!to && from.trim().toLowerCase() !== to.trim().toLowerCase()
}

export function onlyAvailableFilter(enabled: boolean, tickets: { available: boolean }[]): { available: boolean }[] {
  if (!enabled) return tickets
  return tickets.filter(t => t.available)
}