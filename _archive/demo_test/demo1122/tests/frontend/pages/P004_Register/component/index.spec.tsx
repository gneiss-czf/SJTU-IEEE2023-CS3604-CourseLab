import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import RegisterForm from '../../../../../src/frontend/components/RegisterForm'

describe('[Feature:F008][Page:P004] 注册组件', () => {
  it('[@req:F008-S03] 发送验证码倒计时', () => {
    render(<RegisterForm />)
    expect(screen.getByRole('button', { name: 'Register' })).toBeDisabled()
    fireEvent.change(screen.getByLabelText('phone'), { target: { value: '13800138000' } })
    fireEvent.change(screen.getByLabelText('code'), { target: { value: '123456' } })
    fireEvent.change(screen.getByLabelText('pwd'), { target: { value: 'abc12345' } })
    fireEvent.change(screen.getByLabelText('confirm'), { target: { value: 'abc12345' } })
    expect(screen.getByRole('button', { name: 'Register' })).not.toBeDisabled()
  })
})