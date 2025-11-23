import { useEffect, useMemo, useState } from 'react'

export default function BookingPage() {
  const [count, setCount] = useState(1)
  const [seatClass, setSeatClass] = useState('一等座')
  const [route, setRoute] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('searchForm')
      if (raw) {
        const payload = JSON.parse(raw)
        setRoute(`${payload.from}→${payload.to}`)
      }
    } catch {}
  }, [])

  const lock = async () => {
    try {
      const res = await fetch('/api/orders/prelock', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ count }) })
      const data = await res.json()
      if (data?.success || data?.lockId) {
        try { localStorage.setItem('lock-status', 'locked'); sessionStorage.setItem('route', route) } catch {}
        setMsg('已锁票')
        location.hash = '#/orderfill'
      } else {
        setMsg('锁票失败')
      }
    } catch {
      setMsg('锁票失败')
    }
  }

  const page: React.CSSProperties = { marginTop: 80, padding: '24px 32px', display: 'grid', gap: 12 }
  const row: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }
  const input: React.CSSProperties = { height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }
  const btn: React.CSSProperties = { height: 44, borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', fontWeight: 700, width: 160 }

  return (
    <div style={page}>
      <div aria-label="route">{route || '北京→上海'}</div>
      <div style={row}>
        <input aria-label="count" type="number" value={count} onChange={e => setCount(Number(e.target.value))} style={input} />
        <select aria-label="seatClass" value={seatClass} onChange={e => setSeatClass(e.target.value)} style={input}>
          <option>一等座</option>
          <option>二等座</option>
          <option>商务座</option>
        </select>
      </div>
      <button style={btn} onClick={lock}>锁票</button>
      {msg && <div role="alert" style={{ color: '#2e7d32' }}>{msg}</div>}
    </div>
  )
}