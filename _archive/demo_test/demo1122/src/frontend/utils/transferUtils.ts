export type TransferPlan = {
  from: string
  to: string
  firstDepartHour: number
  secondDepartHour: number
  totalMinutes: number
}

export function suggestTransfers(from: string, to: string, options: { limit?: number } = {}): TransferPlan[] {
  if (!from || !to || from.toLowerCase() === to.toLowerCase()) return []
  const base: TransferPlan[] = [
    { from, to, firstDepartHour: 9, secondDepartHour: 12, totalMinutes: 180 },
    { from, to, firstDepartHour: 14, secondDepartHour: 16, totalMinutes: 200 }
  ]
  const limit = options.limit ?? base.length
  return base.slice(0, limit)
}

export function withinTransferWindow(plan: TransferPlan, minMinutes: number, maxMinutes: number): boolean {
  return plan.totalMinutes >= minMinutes && plan.totalMinutes <= maxMinutes
}