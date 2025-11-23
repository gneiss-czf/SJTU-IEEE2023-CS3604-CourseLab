import { useState } from 'react'
import { formatCountdown, isCritical, isExpired } from '../utils/orderCountdown'

export default function OrderFillPage({ initialCountdownMs = 15 * 60 * 1000 }: { initialCountdownMs?: number }) {
  const [countdownMs, setCountdownMs] = useState(initialCountdownMs)
  const [contactPhone, setContactPhone] = useState('13800138000')
  const expired = isExpired(countdownMs)
  const critical = isCritical(countdownMs)
  const page: React.CSSProperties = { marginTop: 80, padding: '24px 32px', background: '#f6f8fb', minHeight: '100vh' }
  const card: React.CSSProperties = { background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 16, display: 'grid', gap: 12 }
  const row: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }
  const countStyle: React.CSSProperties = { fontSize: 18, fontWeight: 700, color: critical ? '#d32f2f' : '#333' }
  const inputStyle: React.CSSProperties = { height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }
  return (
    <div style={page}>
      <div style={card}>
        <div aria-label="countdown" data-critical={critical} data-expired={expired} style={countStyle}>{formatCountdown(countdownMs)}</div>
        {expired && <div role="alert" style={{ color: '#d32f2f' }}>已超时，请重新选择</div>}
        <div style={row}>
          <input aria-label="contactPhone" value={contactPhone} onChange={e => setContactPhone(e.target.value)} style={inputStyle} />
          <div aria-label="readonly-train">G1 北京南→上海虹桥</div>
        </div>
        <div style={row}>
          <div aria-label="readonly-seat">一等座 x1</div>
          <div aria-label="readonly-price">￥555.0</div>
        </div>
      </div>
    </div>
  )
}