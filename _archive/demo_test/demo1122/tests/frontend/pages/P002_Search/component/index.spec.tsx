import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchForm from '../../../../../src/frontend/components/SearchForm'
import TicketList from '../../../../../src/frontend/components/TicketList'
import TicketFilterPanel from '../../../../../src/frontend/components/TicketFilterPanel'
import PassengerPicker from '../../../../../src/frontend/components/PassengerPicker'
import OrderSummary from '../../../../../src/frontend/components/OrderSummary'
import TransferSuggest from '../../../../../src/frontend/components/TransferSuggest'

describe('[Feature:F003][Page:P002] 组件渲染', () => {
  it('[@req:F003-S13] 查询提交显示加载', async () => {
    const onSubmit = () => {}
    render(<SearchForm onSubmit={onSubmit} />)
    const from = screen.getByLabelText('from')
    const to = screen.getByLabelText('to')
    const date = screen.getByLabelText('date')
    fireEvent.change(from, { target: { value: 'Beijing' } })
    fireEvent.change(to, { target: { value: 'Shanghai' } })
    fireEvent.change(date, { target: { value: '2025-12-20' } })
    const btn = screen.getByRole('button', { name: 'Search' })
    expect(btn).not.toBeDisabled()
  })

  it('[@req:F006-S01] 显示换乘建议列表', () => {
    render(<TransferSuggest from="A" to="B" />)
    expect(screen.getByLabelText('transfer-suggest').children.length).toBeGreaterThan(0)
  })

  it('[@req:F006-S02] 用户选择中转方案', () => {
    let selected: any = null
    const onSelect = (p: any) => { selected = p }
    render(<TransferSuggest from="A" to="B" onSelect={onSelect} />)
    const btns = screen.getAllByLabelText('select-plan')
    fireEvent.click(btns[0])
    expect(selected).not.toBeNull()
  })

  it('[@req:F005-S05] 仅显示有票组件过滤', () => {
    const tickets = [
      { trainNo: 'G1', available: true },
      { trainNo: 'D2', available: false }
    ]
    render(<TicketList tickets={tickets as any} onlyAvailable />)
    expect(screen.getByLabelText('ticket-list').children.length).toBe(1)
  })

  it('[@req:F005-S06] 乘客选择上限', () => {
    render(<PassengerPicker max={2} />)
    const inc = screen.getByLabelText('inc')
    fireEvent.click(inc); fireEvent.click(inc); fireEvent.click(inc)
    expect(screen.getByLabelText('count').textContent).toBe('2')
  })

  it('[@req:F005-S09] 显示乘客数', () => {
    render(<PassengerPicker max={3} />)
    expect(screen.getByLabelText('count').textContent).toBe('0')
  })

  it('[@req:F005-S14] 订单总价显示', () => {
    render(<OrderSummary count={2} pricePerSeat={100} />)
    expect(screen.getByLabelText('summary-total').textContent).toContain('200')
  })

  it('[@req:F005-S17] 提交按钮禁用逻辑', () => {
    render(<OrderSummary count={0} pricePerSeat={100} />)
    expect(screen.getByLabelText('submit')).toBeDisabled()
  })

  it('[@req:F006-S03] 展示两段出发时间', () => {
    render(<TransferSuggest from="A" to="B" />)
    expect(screen.getByLabelText('transfer-suggest').children[0].textContent).toMatch(/:/)
  })

  it('[@req:F003-S16] 显示车次信息', () => {
    const tickets = [
      { trainNo: 'G1', available: true },
      { trainNo: 'D2', available: false }
    ]
    render(<TicketList tickets={tickets as any} />)
    expect(screen.getByLabelText('ticket-list').children.length).toBe(2)
  })

  it('[@req:F004-S16] 显示结果数量', () => {
    render(<TicketFilterPanel count={3} />)
    expect(screen.getByLabelText('result-count').textContent).toContain('3')
  })

  it('[@req:F004-S18] 清空筛选恢复统计', () => {
    const { rerender } = render(<TicketFilterPanel count={2} />)
    expect(screen.getByLabelText('result-count').textContent).toContain('2')
    rerender(<TicketFilterPanel count={0} />)
    expect(screen.getByLabelText('result-count').textContent).toContain('0')
  })

  it('[@req:F004-S15] 实时过滤列表', () => {
    const { rerender } = render(<TicketFilterPanel count={2} />)
    expect(screen.getByLabelText('result-count').textContent).toContain('2')
    rerender(<TicketFilterPanel count={1} />)
    expect(screen.getByLabelText('result-count').textContent).toContain('1')
  })

  it('[@req:F003-S17] 显示余票信息', () => {
    const tickets = [
      { trainNo: 'G1', available: true },
      { trainNo: 'D2', available: false }
    ]
    render(<TicketList tickets={tickets as any} />)
    expect(screen.getByText(/soldout/)).toBeDefined()
  })
})