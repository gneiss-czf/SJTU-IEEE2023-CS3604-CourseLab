export function isEligible(originalDepartMs: number, nowMs: number): boolean {
  return originalDepartMs - nowMs > 24 * 60 * 60 * 1000
}

export function checkType(originalType: string, newType: string): boolean {
  const types = ['成人', '学生', '儿童']
  return types.includes(originalType) && types.includes(newType)
}

export function checkTimes(originalDepartMs: number, newDepartMs: number, nowMs: number): boolean {
  if (nowMs >= originalDepartMs) return false
  return newDepartMs > nowMs
}

export function checkTimeWindow(departMs: number, nowMs: number): boolean {
  return departMs - nowMs >= 2 * 60 * 60 * 1000
}

export function calcDiff(originalAmount: number, newAmount: number): number {
  return newAmount - originalAmount
}

export function createChangeOrder(orderId: string, diff: number): { id: string; orderId: string; diff: number } {
  return { id: `CHG-${Date.now()}`, orderId, diff }
}