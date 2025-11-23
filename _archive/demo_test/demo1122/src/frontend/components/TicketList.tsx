type Ticket = { trainNo: string; available: boolean; seats?: number }

export default function TicketList({ tickets, onlyAvailable }: { tickets: Ticket[]; onlyAvailable?: boolean }) {
  const list = onlyAvailable ? tickets.filter(t => t.available) : tickets
  const ulStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr', gap: 12, padding: 0, margin: 0, listStyle: 'none' }
  const liStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fafafa', borderRadius: 8, padding: '12px 16px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', fontSize: 14 }
  const tagStyle: React.CSSProperties = { color: '#d32f2f', fontWeight: 600 }
  return (
    <ul aria-label="ticket-list" style={ulStyle}>
      {list.map(t => (
        <li key={t.trainNo} style={liStyle}>
          <span>{t.trainNo}</span>
          <span>{t.available ? '' : <span style={tagStyle}> (soldout)</span>}</span>
        </li>
      ))}
    </ul>
  )
}