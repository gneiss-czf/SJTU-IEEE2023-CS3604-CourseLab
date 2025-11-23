export default function QuickEntries({ items = ['车票查询', '我的订单', '帮助'] }: { items?: string[] }) {
  const listStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, padding: 0, margin: 0, listStyle: 'none' }
  const itemStyle: React.CSSProperties = { background: '#f5f7fa', borderRadius: 8, height: 88, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 600, color: '#333', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }
  return (
    <ul aria-label="quick-entries" style={listStyle}>
      {items.map(i => (
        <li key={i} style={itemStyle} onClick={() => {
          if (i.includes('查询')) location.hash = '#/search'
          else if (i.includes('订单')) location.hash = '#/orders'
          else if (i.includes('帮助')) location.hash = '#/help'
        }}>{i}</li>
      ))}
    </ul>
  )
}