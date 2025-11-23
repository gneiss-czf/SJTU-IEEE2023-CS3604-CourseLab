import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import QuickEntries from '../components/QuickEntries'
import HomeLanding from '../pages/HomeLanding'
import SearchPage from '../pages/SearchPage'
import OrderFillPage from '../pages/OrderFillPage'
import ProfilePage from '../pages/ProfilePage'
import ChangeTicketPage from '../pages/ChangeTicketPage'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import UserOrdersPage from '../pages/UserOrdersPage'
import PaymentPage from '../pages/PaymentPage'
import PaymentSuccessPage from '../pages/PaymentSuccessPage'

function useHashRoute() {
  const [hash, setHash] = useState<string>(() => location.hash.replace(/^#\/?/, ''))
  useEffect(() => {
    const onChange = () => setHash(location.hash.replace(/^#\/?/, ''))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const active = useMemo<'home' | 'search' | 'profile'>(() => {
    if (hash.startsWith('search')) return 'search'
    if (hash.startsWith('profile')) return 'profile'
    return 'home'
  }, [hash])

  const pageStyle: React.CSSProperties = { paddingTop: 80, maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }

  let content: JSX.Element
  switch (true) {
    case hash === '' || hash === '/' || hash === 'home':
      content = (
        <div>
          <HomeLanding />
          <div style={{ marginTop: 24 }}>
            <QuickEntries />
          </div>
        </div>
      )
      break
    case hash.startsWith('search'):
      content = <SearchPage />
      break
    case hash.startsWith('login'):
      content = <LoginForm />
      break
    case hash.startsWith('register'):
      content = <RegisterForm />
      break
    case hash.startsWith('orderfill'):
      content = <OrderFillPage />
      break
    case hash.startsWith('orders'):
      content = <UserOrdersPage />
      break
    case hash.startsWith('profile'):
      content = <ProfilePage />
      break
    case hash.startsWith('change'):
      content = <ChangeTicketPage />
      break
    case hash.startsWith('payment'):
      content = <PaymentPage />
      break
    case hash.startsWith('pay-success'):
      content = <PaymentSuccessPage />
      break
    default:
      content = <div>404</div>
  }

  return (
    <div>
      <Header isAuthed={true} active={active} />
      <main style={pageStyle}>{content}</main>
    </div>
  )
}