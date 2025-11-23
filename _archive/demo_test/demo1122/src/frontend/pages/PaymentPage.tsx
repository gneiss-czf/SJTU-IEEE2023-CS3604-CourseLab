import { useEffect, useState } from 'react'

export default function PaymentPage() {
  const [orderId] = useState('ORD-202511220001')
  const [amount] = useState(555)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const pay = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/payments/initiate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ orderId, paymentMethod: 'wechat', amount }) })
      const data = await res.json()
      if (data?.success) {
        await fetch('/api/payments/callback', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ paymentId: data.data.paymentId, orderId, status: 'SUCCESS', transactionId: 'TX-001', amount, signature: 'mock_signature' }) })
        try { localStorage.setItem(`order-${orderId}`, 'paid') } catch {}
        setMsg('支付成功')
        location.hash = '#/pay-success'
      } else {
        setMsg('支付失败')
      }
    } catch {
      setMsg('支付失败')
    } finally {
      setLoading(false)
    }
  }

  const page: React.CSSProperties = { marginTop: 80, padding: '24px 32px', display: 'grid', gap: 12 }
  const btn: React.CSSProperties = { height: 44, borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', fontWeight: 700, width: 160 }

  return (
    <div style={page}>
      <div aria-label="pay-order-id">{orderId}</div>
      <div aria-label="pay-amount">{amount}</div>
      <button style={btn} onClick={pay} disabled={loading}>{loading ? '处理中...' : '立即支付'}</button>
      {msg && <div role="alert" style={{ color: '#2e7d32' }}>{msg}</div>}
    </div>
  )
}