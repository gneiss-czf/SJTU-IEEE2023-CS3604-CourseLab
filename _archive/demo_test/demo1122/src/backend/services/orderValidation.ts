export type OrderPayload = {
  from: string
  to: string
  date: string
  seatClass: string
  passengers: { name: string; id: string }[]
}

export function hasRequiredFields(order: Partial<OrderPayload>): boolean {
  return !!order.from && !!order.to && !!order.date && !!order.seatClass && Array.isArray(order.passengers) && order.passengers.length > 0
}