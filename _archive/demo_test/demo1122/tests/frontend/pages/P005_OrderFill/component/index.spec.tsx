import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import OrderFillPage from '../../../../../src/frontend/pages/OrderFillPage'
import OrderSummary from '../../../../../src/frontend/components/OrderSummary'
import TicketTypePicker from '../../../../../src/frontend/components/TicketTypePicker'

describe('[Feature:F009][Page:P005] 订单填写组件', () => {
  it('[@req:F009-S01] 显示车次信息只读', () => {
    render(<OrderFillPage />)
    expect(screen.getByLabelText('readonly-train').textContent).toContain('北京南')
  })
  it('[@req:F009-S02] 显示席别与数量', () => {
    render(<OrderFillPage />)
    expect(screen.getByLabelText('readonly-seat').textContent).toContain('x1')
  })
  it('[@req:F009-S03] 显示票价明细', () => {
    render(<OrderFillPage />)
    expect(screen.getByLabelText('readonly-price').textContent).toContain('￥')
  })
  it('[@req:F009-S15] 联系人手机号默认填充', () => {
    render(<OrderFillPage />)
    expect(screen.getByLabelText('contactPhone')).toHaveValue('13800138000')
  })

  it('[@req:F009-S12] 票种选择包含成人儿童学生', () => {
    render(<TicketTypePicker />)
    const container = screen.getByLabelText('ticket-type')
    expect(container.textContent).toContain('成人')
    expect(container.textContent).toContain('儿童')
    expect(container.textContent).toContain('学生')
  })
  it('[@req:F010-S16] 提交后按钮防抖', () => {
    render(<OrderSummary count={1} pricePerSeat={100} />)
    const btn = screen.getByLabelText('submit')
    fireEvent.click(btn)
    expect(btn).toBeDisabled()
  })
})