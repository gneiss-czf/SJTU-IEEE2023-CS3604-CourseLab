import { useState } from 'react'

export default function ChangeTicketPage() {
  const [newDate, setNewDate] = useState('2025-12-21')
  const [newSeat, setNewSeat] = useState('二等座')
  const [passenger, setPassenger] = useState('张三')
  const diff = 50
  const page: React.CSSProperties = { marginTop: 80, padding: '24px 32px', background: '#f6f8fb', minHeight: '100vh' }
  const card: React.CSSProperties = { background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 16, display: 'grid', gap: 12 }
  const row: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }
  const input: React.CSSProperties = { height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }
  const select: React.CSSProperties = { height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }
  const tip: React.CSSProperties = { background: '#fff3cd', color: '#7f6000', borderRadius: 8, padding: '8px 12px' }
  const amount: React.CSSProperties = { fontWeight: 700, color: '#d32f2f' }
  return (
    <div style={page}>
      <div style={card}>
        <div aria-label="current-ticket">北京→上海 2025-12-20 二等座</div>
        <div style={row}>
          <input aria-label="new-date" value={newDate} onChange={e => setNewDate(e.target.value)} style={input} />
          <select aria-label="new-seat" value={newSeat} onChange={e => setNewSeat(e.target.value)} style={select}>
            <option>二等座</option>
            <option>一等座</option>
          </select>
        </div>
        <div aria-label="rules-tip" style={tip}>改签需在开车前2小时</div>
        <div style={row}>
          <select aria-label="passenger-select" value={passenger} onChange={e => setPassenger(e.target.value)} style={select}>
            <option>张三</option>
            <option>李四</option>
          </select>
          <div aria-label="diff-amount" style={amount}>{diff}</div>
        </div>
      </div>
    </div>
  )
}