import { useState } from 'react'
import { isValidPhone, isValidCode, isValidPassword, confirmPassword } from '../utils/registerUtils'

export default function RegisterForm() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [pwd, setPwd] = useState('')
  const [confirm, setConfirm] = useState('')
  const valid = isValidPhone(phone) && isValidCode(code) && isValidPassword(pwd) && confirmPassword(pwd, confirm)
  return (
    <div style={{ width: 420, margin: '64px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: 24, display: 'grid', gap: 12 }}>
      <input aria-label="phone" value={phone} onChange={e => setPhone(e.target.value)} style={{ height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }} />
      <input aria-label="code" value={code} onChange={e => setCode(e.target.value)} style={{ height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }} />
      <input aria-label="pwd" value={pwd} onChange={e => setPwd(e.target.value)} style={{ height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }} />
      <input aria-label="confirm" value={confirm} onChange={e => setConfirm(e.target.value)} style={{ height: 40, border: '1px solid #dde3ea', borderRadius: 8, padding: '0 12px' }} />
      <button disabled={!valid} style={{ height: 44, borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', fontWeight: 700 }}>Register</button>
    </div>
  )
}