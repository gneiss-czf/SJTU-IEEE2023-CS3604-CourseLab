import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '../../../../../src/frontend/components/LoginForm'

describe('[Feature:F007][Page:P003] 登录组件', () => {
  it('[@req:F007-S01] 账号密码登录输入', () => {
    render(<LoginForm />)
    const phone = screen.getByLabelText('phone')
    const code = screen.getByLabelText('code')
    fireEvent.change(phone, { target: { value: '13800138000' } })
    fireEvent.change(code, { target: { value: '123456' } })
    expect(screen.getByRole('button', { name: 'Login' })).not.toBeDisabled()
  })

  it('[@req:F007-S03] 记住密码本地加密存储', () => {
    render(<LoginForm onSubmit={() => {}} />)
    fireEvent.change(screen.getByLabelText('phone'), { target: { value: '13800138000' } })
    fireEvent.change(screen.getByLabelText('code'), { target: { value: '123456' } })
    fireEvent.click(screen.getByLabelText('remember'))
    fireEvent.click(screen.getByRole('button', { name: 'Login' }))
    const saved = localStorage.getItem('remembered')
    expect(saved).toBeTruthy()
  })

  it('[@req:F007-S06] 发送验证码倒计时禁用', () => {
    render(<LoginForm />)
    const send = screen.getByLabelText('send-code')
    fireEvent.click(send)
    expect(send).toBeDisabled()
    expect(send.textContent).toContain('60s后重试')
  })
})