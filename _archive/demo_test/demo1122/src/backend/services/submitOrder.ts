import { hasRequiredFields, OrderPayload } from './orderValidation'

export type SubmitResult = { orderId: string; totalPrice: number }

export function submitOrder(order: OrderPayload, pricePerSeat: number, insurance = 0): SubmitResult {
  if (!hasRequiredFields(order)) throw new Error('Invalid order')
  const totalPrice = pricePerSeat * order.passengers.length + insurance
  const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`
  return { orderId, totalPrice }
}