export function startPay(orderId: string): { redirectTo: string } {
  return { redirectTo: `payment:${orderId}` }
}

export function cancelOrder(orderId: string): { orderId: string; status: string } {
  return { orderId, status: 'cancelled' }
}