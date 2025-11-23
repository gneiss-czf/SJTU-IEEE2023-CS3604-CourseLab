import { useEffect, useState } from 'react'

type OrderCard = { id: string; route: string; departTime: string; passengers: number; amount: number; status: string }

export default function UserOrdersPage() {
  const [items, setItems] = useState<OrderCard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/orders/user/user001')
        if (!res.ok) throw new Error('bad')
        const data = await res.json()
        setItems(data?.data?.items || [])
        setError('')
      } catch {
        setError('加载失败')
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  const page: React.CSSProperties = { marginTop: 80, padding: '24px 32px' }
  const list: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr', gap: 12 }
  const row: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'auto 1fr auto auto auto auto', alignItems: 'center', gap: 12, background: '#fafafa', borderRadius: 8, padding: '12px 16px' }
  const action: React.CSSProperties = { height: 32, borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', padding: '0 12px' }

  return (
    <div style={page}>
      {error && <div role="alert" style={{ color: '#d32f2f' }}>{error}</div>}
      {loading ? <div>加载中...</div> : (
        <div style={list}>
          {items.map(o => (
            <div key={o.id} style={row}>
              <span>{o.id}</span>
              <span>{o.route}</span>
              <span>{o.departTime}</span>
              <span>{o.passengers}</span>
              <span>{o.amount}</span>
              <span>{o.status}</span>
              <button style={action} onClick={() => { location.hash = '#/payment' }}>立即支付</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}