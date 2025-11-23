export default function TicketFilterPanel({ count }: { count: number }) {
  const panel: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }
  const countStyle: React.CSSProperties = { background: '#e3f2fd', color: '#0d47a1', borderRadius: 12, padding: '4px 10px', fontSize: 12, fontWeight: 700 }
  return (
    <div style={panel}>
      <div aria-label="result-count" style={countStyle}>结果 {count} 条</div>
    </div>
  )
}