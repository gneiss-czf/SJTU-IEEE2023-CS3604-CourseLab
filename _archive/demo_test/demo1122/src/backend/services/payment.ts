export type PaymentOrder = { id: string; amount: number; createdAt: number }

export function createPaymentOrder(amount: number): PaymentOrder {
  return { id: `PAY-${Date.now()}`, amount, createdAt: Date.now() }
}

export function isPaymentExpired(createdAt: number, now: number, minutes = 30): boolean {
  return now - createdAt > minutes * 60 * 1000
}

export function invokePayment(channel: 'wechat' | 'wechat_app' | 'alipay' | 'alipay_app' | 'bank_card', orderId: string, amount: number): { url: string } {
  let base = ''
  if (channel === 'wechat') base = 'https://pay.wechat.com/q/'
  else if (channel === 'wechat_app') base = 'weixin://app/pay?'
  else if (channel === 'alipay') base = 'https://mapi.alipay.com/gateway.do?'
  else if (channel === 'alipay_app') base = 'alipay://app?order='
  else base = 'https://bank.example/pay?order='
  return { url: `${base}${orderId}-${amount}` }
}

export function pollPaymentStatus(attempt: number, successAttempt = 3): { status: 'pending' | 'success' } {
  if (attempt >= successAttempt) return { status: 'success' }
  return { status: 'pending' }
}