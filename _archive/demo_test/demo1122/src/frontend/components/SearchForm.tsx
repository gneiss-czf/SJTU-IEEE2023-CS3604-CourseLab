import { useState } from 'react'
import { validateRequiredFields, validateFromTo } from '../utils/searchRules'

type Props = {
  onSubmit?: (payload: { from: string; to: string; date: string }) => void
}

export default function SearchForm(props: Props) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)

  const canSubmit = validateRequiredFields({ from, to, date }) && validateFromTo(from, to)

  const submit = async () => {
    if (!canSubmit) return
    setLoading(true)
    props.onSubmit?.({ from, to, date })
    setLoading(false)
  }

  const wrap: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 120px', gap: 12, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 16 }
  const input: React.CSSProperties = { height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px', fontSize: 14 }
  const btn: React.CSSProperties = { height: 40, borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', fontWeight: 600 }
  return (
    <div style={wrap}>
      <input aria-label="from" value={from} onChange={e => setFrom(e.target.value)} style={input} />
      <input aria-label="to" value={to} onChange={e => setTo(e.target.value)} style={input} />
      <input aria-label="date" value={date} onChange={e => setDate(e.target.value)} style={input} />
      <button disabled={!canSubmit || loading} onClick={submit} style={btn}>{loading ? 'Loading' : 'Search'}</button>
    </div>
  )
}