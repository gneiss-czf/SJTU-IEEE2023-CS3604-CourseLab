import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import OrderFillPage from '../../../../../src/frontend/pages/OrderFillPage'

describe('[Feature:F009][Page:P005] 订单填写集成', () => {
  it('[@req:F009-S06] 超时自动释放座位提示', () => {
    render(<OrderFillPage initialCountdownMs={-1} />)
    expect(screen.getByRole('alert').textContent).toContain('已超时')
  })
})