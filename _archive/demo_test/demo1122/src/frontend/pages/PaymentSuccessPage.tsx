export default function PaymentSuccessPage() {
  const page: React.CSSProperties = { marginTop: 80, padding: '24px 32px', display: 'grid', gap: 12 }
  const btn: React.CSSProperties = { height: 44, borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', fontWeight: 700, width: 160 }
  return (
    <div style={page}>
      <div style={{ fontSize: 20, fontWeight: 700 }}>支付成功</div>
      <button style={btn} onClick={() => { location.hash = '#/profile' }}>返回我的</button>
    </div>
  )
}