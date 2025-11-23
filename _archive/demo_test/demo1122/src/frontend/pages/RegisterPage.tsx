import RegisterForm from '../components/RegisterForm'

export default function RegisterPage() {
  const wrap: React.CSSProperties = { marginTop: 80, padding: '24px 32px' }
  return (
    <div style={wrap}>
      <RegisterForm />
    </div>
  )
}