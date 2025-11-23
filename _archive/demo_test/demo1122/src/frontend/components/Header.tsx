import { useState } from 'react'

export default function Header({ isAuthed = false, active = 'home' }: { isAuthed?: boolean; active?: 'home' | 'search' | 'profile' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const wrapStyle: React.CSSProperties = { position: 'fixed', top: 0, left: 0, right: 0, height: 64, background: '#1565c0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', zIndex: 1000 }
  const logoStyle: React.CSSProperties = { fontSize: 22, fontWeight: 700, letterSpacing: 1 }
  const navStyle: React.CSSProperties = { display: 'flex', gap: 24 }
  const linkStyle: React.CSSProperties = { color: '#fff', textDecoration: 'none', fontSize: 16, opacity: 0.85 }
  const activeStyle: React.CSSProperties = { opacity: 1, borderBottom: '2px solid #ffeb3b', paddingBottom: 4 }
  const authStyle: React.CSSProperties = { display: 'flex', gap: 12 }
  const inputStyle: React.CSSProperties = { height: 32, borderRadius: 16, border: 'none', padding: '0 12px', outline: 'none' }
  const menuBtnStyle: React.CSSProperties = { marginLeft: 12, height: 32, borderRadius: 16, border: 'none', background: '#0d47a1', color: '#fff', padding: '0 12px' }
  return (
    <header aria-label="nav" data-fixed="true" style={wrapStyle}>
      <div aria-label="logo" style={logoStyle}>12306</div>
      <nav aria-label="menu" data-open={menuOpen} style={navStyle}>
        <a href="#" aria-current={active === 'home'} style={{ ...linkStyle, ...(active === 'home' ? activeStyle : {}) }} onClick={() => { location.hash = '#/home' }}>首页</a>
        <a href="#" aria-current={active === 'search'} style={{ ...linkStyle, ...(active === 'search' ? activeStyle : {}) }} onClick={() => { location.hash = '#/search' }}>查询</a>
        <a href="#" aria-current={active === 'profile'} style={{ ...linkStyle, ...(active === 'profile' ? activeStyle : {}) }} onClick={() => { location.hash = '#/profile' }}>我的</a>
      </nav>
      {!isAuthed ? (
        <div aria-label="auth-links" style={authStyle}>
          <button style={menuBtnStyle} onClick={() => { location.hash = '#/login' }}>登录</button>
          <button style={menuBtnStyle} onClick={() => { location.hash = '#/register' }}>注册</button>
        </div>
      ) : (
        <div aria-label="user-entry" style={{ ...authStyle, fontWeight: 600 }}>个人中心</div>
      )}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input aria-label="navSearch" style={inputStyle} />
        <button aria-label="menu-toggle" style={menuBtnStyle} onClick={() => setMenuOpen(v => !v)}>菜单</button>
      </div>
    </header>
  )
}