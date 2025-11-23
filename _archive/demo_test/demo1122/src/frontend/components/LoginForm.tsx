import { useState } from 'react'
import { isValidPhone, isValidCode } from '../utils/loginUtils'

export default function LoginForm({ onSubmit }: { onSubmit?: (payload: { phone: string; code: string }) => void }) {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [remember, setRemember] = useState(false)
  const [sendDisabled, setSendDisabled] = useState(false)
  const [sendText, setSendText] = useState('发送验证码')
  const valid = isValidPhone(phone) && isValidCode(code)

  function encodePayload(p: any): string {
    try {
      if (typeof btoa !== 'undefined') return btoa(JSON.stringify(p))
    } catch {}
    try {
      const buf = (globalThis as any).Buffer || undefined
      if (buf) return buf.from(JSON.stringify(p)).toString('base64')
    } catch {}
    return JSON.stringify(p)
  }

  function handleLogin() {
    if (remember) {
      const encoded = encodePayload({ phone, code })
      try {
        localStorage.setItem('remembered', encoded)
      } catch {}
    }
    onSubmit?.({ phone, code })
  }

  function handleSendCode() {
    setSendDisabled(true)
    setSendText('60s后重试')
  }

  return (
    <div style={{ width: 360, margin: '96px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: 24, display: 'grid', gap: 12 }}>
      <input aria-label="phone" value={phone} onChange={e => setPhone(e.target.value)} style={{ height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: 12 }}>
        <input aria-label="code" value={code} onChange={e => setCode(e.target.value)} style={{ height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }} />
        <button aria-label="send-code" disabled={sendDisabled} onClick={handleSendCode} style={{ height: 40, borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', fontWeight: 600 }}>{sendText}</button>
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#555' }}>
        <input aria-label="remember" type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
        记住密码
      </label>
      <button disabled={!valid} onClick={handleLogin} style={{ height: 44, borderRadius: 8, border: 'none', background: '#1565c0', color: '#fff', fontWeight: 700 }}>Login</button>
    </div>
  )
}