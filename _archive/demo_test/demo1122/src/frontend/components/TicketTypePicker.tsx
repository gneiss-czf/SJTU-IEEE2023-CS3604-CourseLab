import { useState } from 'react'

export default function TicketTypePicker({ defaultType = '成人' }: { defaultType?: '成人' | '儿童' | '学生' }) {
  const [type, setType] = useState(defaultType)
  const wrap: React.CSSProperties = { display: 'flex', gap: 16, alignItems: 'center' }
  const label: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 8, background: '#f5f7fa', borderRadius: 8, padding: '8px 12px' }
  return (
    <div aria-label="ticket-type" data-selected={type} style={wrap}>
      <label style={label}>
        <input type="radio" name="ticketType" value="成人" checked={type === '成人'} onChange={() => setType('成人')} />
        成人
      </label>
      <label style={label}>
        <input type="radio" name="ticketType" value="儿童" checked={type === '儿童'} onChange={() => setType('儿童')} />
        儿童
      </label>
      <label style={label}>
        <input type="radio" name="ticketType" value="学生" checked={type === '学生'} onChange={() => setType('学生')} />
        学生
      </label>
    </div>
  )
}