export function isDateInRange(date: Date, days = 30): boolean {
  const now = new Date()
  const end = new Date(now.getTime() + days * 24 * 60 * 60 * 1000)
  const d = new Date(date)
  return d >= startOfDay(now) && d <= end
}

export function isPastDate(date: Date): boolean {
  const d = new Date(date)
  const today = startOfDay(new Date())
  return d < today
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}