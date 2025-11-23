import { useEffect, useState } from 'react'
import SearchForm from '../components/SearchForm'
import TicketFilterPanel from '../components/TicketFilterPanel'
import TicketList from '../components/TicketList'
import { onlyAvailableFilter } from '../utils/searchRules'

type Ticket = { trainNo: string; available: boolean }

export default function SearchResultsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [error, setError] = useState('')
  const [onlyAvailable, setOnlyAvailable] = useState(false)

  const fetchTickets = async (payload?: { from: string; to: string; date: string }) => {
    try {
      setError('')
      const url = `/api/search`
      const res = await fetch(url)
      if (!res.ok) throw new Error('Bad response')
      const data: Ticket[] = await res.json()
      setTickets(data)
    } catch (e) {
      setError('查询失败')
    }
  }

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('searchForm')
      if (raw) {
        const payload = JSON.parse(raw)
        fetchTickets(payload)
      }
    } catch {
      fetchTickets()
    }
  }, [])

  const onSubmit = async (payload: { from: string; to: string; date: string }) => {
    await fetchTickets(payload)
  }

  const visible: Ticket[] = onlyAvailableFilter(onlyAvailable, tickets) as Ticket[]

  const pageStyle: React.CSSProperties = { marginTop: 80, padding: '24px 32px' }
  const layoutStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: '300px 1fr', gap: 24 }
  const sideStyle: React.CSSProperties = { background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 16 }
  const mainStyle: React.CSSProperties = { background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 16 }
  const toolbarStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }
  const checkboxStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 8 }
  return (
    <div style={pageStyle}>
      <div style={{ marginBottom: 16 }}>
        <SearchForm onSubmit={onSubmit} />
      </div>
      <div style={layoutStyle}>
        <aside style={sideStyle}>
          <TicketFilterPanel count={visible.length} />
        </aside>
        <main style={mainStyle}>
          <div style={toolbarStyle}>
            <label style={checkboxStyle}>
              <input aria-label="onlyAvailable" type="checkbox" checked={onlyAvailable} onChange={e => setOnlyAvailable(e.target.checked)} />
              仅显示有票
            </label>
            {error && <div role="alert" style={{ color: '#d32f2f' }}>{error}</div>}
          </div>
          <TicketList tickets={visible} onlyAvailable={onlyAvailable} />
        </main>
      </div>
    </div>
  )
}