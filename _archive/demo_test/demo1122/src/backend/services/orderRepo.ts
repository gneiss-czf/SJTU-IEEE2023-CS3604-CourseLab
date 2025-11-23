export type OrderRecord = { id: string; passengerCount: number; payTimeoutMinutes: number }

export function createOrderRecord(passengerCount: number, payTimeoutMinutes = 30): OrderRecord {
  return { id: `REC-${Date.now()}`, passengerCount, payTimeoutMinutes }
}