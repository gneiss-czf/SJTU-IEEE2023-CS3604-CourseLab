import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProfilePage from '../../../../../src/frontend/pages/ProfilePage'

describe('[Feature:F016][Page:P006] 登出集成', () => {
  it('[@req:F016-S07] 点击登出更新导航', () => {
    render(<ProfilePage />)
    const navLogout = screen.getByLabelText('nav-logout')
    fireEvent.click(navLogout)
    expect(screen.getByLabelText('username').textContent).toBe('')
  })
})