import { useEffect, useMemo, useState } from 'react'

export default function HomeLanding() {
  const [activeTab, setActiveTab] = useState<'single' | 'round' | 'transfer' | 'refund'>('single')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [isStudent, setIsStudent] = useState(false)
  const [isHighSpeed, setIsHighSpeed] = useState(false)
  const [idx, setIdx] = useState(0)

  const banners = useMemo(() => [
    'https://www.12306.cn/index/images/pic/banner10.jpg',
    'https://www.12306.cn/index/images/pic/banner12.jpg',
    'https://www.12306.cn/index/images/pic/banner26.jpg',
    'https://www.12306.cn/index/images/pic/banner0619.jpg'
  ], [])

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % banners.length), 3000)
    return () => clearInterval(t)
  }, [banners.length])

  const swap = () => { setFrom(to); setTo(from) }
  const submit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!from || !to) return
    sessionStorage.setItem('searchForm', JSON.stringify({ from, to, date, isStudent, isHighSpeed }))
    location.hash = '#/search'
  }

  const page: React.CSSProperties = { display: 'grid', gap: 32 }
  const hero: React.CSSProperties = { position: 'relative', height: 360, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }
  const bg: React.CSSProperties = { position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center' }
  const container: React.CSSProperties = { position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '520px 1fr', alignItems: 'center', gap: 24, padding: '0 32px' }
  const card: React.CSSProperties = { background: 'rgba(255,255,255,0.96)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 16, display: 'grid', gap: 12 }
  const tabs: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: 8 }
  const tab: React.CSSProperties = { height: 36, borderRadius: 8, padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, cursor: 'pointer' }
  const line: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: 12 }
  const label: React.CSSProperties = { fontSize: 12, color: '#666' }
  const input: React.CSSProperties = { height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }
  const swapBtn: React.CSSProperties = { height: 40, borderRadius: 8, border: 'none', background: '#e3f2fd', color: '#1565c0', fontWeight: 700 }
  const options: React.CSSProperties = { display: 'flex', gap: 16, alignItems: 'center' }
  const submitBtn: React.CSSProperties = { height: 44, borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', fontSize: 16, fontWeight: 700 }
  const serviceGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 16 }
  const serviceItem: React.CSSProperties = { background: '#f5f7fa', borderRadius: 12, height: 120, display: 'grid', placeItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }

  const serviceIcons = [
    { title: '重点旅客预约', icon: 'https://www.12306.cn/index/images/icon/2020/yd1.png' },
    { title: '遗失物品查找', icon: 'https://www.12306.cn/index/images/icon/2020/yd2.png' },
    { title: '约车服务', icon: 'https://www.12306.cn/index/images/icon/2020/yd3.png' },
    { title: '便民托运', icon: 'https://www.12306.cn/index/images/icon/2020/yd4.png' },
    { title: '车站引导', icon: 'https://www.12306.cn/index/images/icon/2020/yd5.png' },
    { title: '站车风采', icon: 'https://www.12306.cn/index/images/icon/2020/yd6.png' },
    { title: '用户反馈', icon: 'https://www.12306.cn/index/images/icon/2020/yd7.png' }
  ]

  return (
    <div style={page}>
      <div style={hero}>
        <div style={{ ...bg, backgroundImage: `url(${banners[idx]})` }} />
        <div style={container}>
          <div style={card}>
            <div style={tabs}>
              {['single', 'round', 'transfer', 'refund'].map(t => (
                <div key={t} style={{ ...tab, background: activeTab === t ? '#1976d2' : '#eef3f8', color: activeTab === t ? '#fff' : '#333' }} onClick={() => setActiveTab(t as any)}>
                  {t === 'single' ? '单程' : t === 'round' ? '往返' : t === 'transfer' ? '中转换乘' : '退改签'}
                </div>
              ))}
            </div>
            <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
              <div style={line}>
                <div>
                  <div style={label}>出发地</div>
                  <input style={input} value={from} onChange={e => setFrom(e.target.value)} />
                </div>
                <button type="button" style={swapBtn} onClick={swap}>⇌</button>
                <div>
                  <div style={label}>到达地</div>
                  <input style={input} value={to} onChange={e => setTo(e.target.value)} />
                </div>
              </div>
              <div>
                <div style={label}>出发日期</div>
                <input style={{ ...input, width: '100%' }} type="date" value={date} onChange={e => setDate(e.target.value)} />
              </div>
              <div style={options}>
                <label><input type="checkbox" checked={isStudent} onChange={e => setIsStudent(e.target.checked)} /> 学生</label>
                <label><input type="checkbox" checked={isHighSpeed} onChange={e => setIsHighSpeed(e.target.checked)} /> 高铁/动车</label>
              </div>
              <button type="submit" style={submitBtn}>查 询</button>
            </form>
          </div>
        </div>
      </div>
      <div style={serviceGrid}>
        {serviceIcons.map(s => (
          <div key={s.title} style={serviceItem}>
            <img src={s.icon} alt={s.title} style={{ width: 64, height: 64 }} />
            <div style={{ fontWeight: 700 }}>{s.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}