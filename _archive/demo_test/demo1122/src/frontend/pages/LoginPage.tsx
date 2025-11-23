import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  const wrap: React.CSSProperties = { marginTop: 80, padding: '24px 32px' }
  const onSubmit = async (payload: { phone: string; code: string }) => {
    try {
      const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone: payload.phone, password: 'P@ssw0rd' }) })
      const data = await res.json()
      if (data?.success) {
        try {
          localStorage.setItem('token', data.data.token)
          localStorage.setItem('user', JSON.stringify({ real_name: '张三', phone: payload.phone }))
        } catch {}
        window.dispatchEvent(new Event('userLoginStatusChanged'))
        location.hash = '#/home'
      }
    } catch {}
  }
  return (
    <div style={wrap}>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}