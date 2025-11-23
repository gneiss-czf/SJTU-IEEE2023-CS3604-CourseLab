import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchPage from '../../../../../src/frontend/pages/SearchPage'

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async (input: any) => ({ ok: true, json: async () => ([{ trainNo: 'G1', available: true }, { trainNo: 'D2', available: false }]) })))
})

describe('[Feature:F003][Page:P002] 页面集成', () => {
  it('[@req:F003-S12] 必填项完整校验', async () => {
    render(<SearchPage />)
    const from = screen.getByLabelText('from')
    const to = screen.getByLabelText('to')
    const date = screen.getByLabelText('date')
    fireEvent.change(from, { target: { value: 'Beijing' } })
    fireEvent.change(to, { target: { value: 'Shanghai' } })
    fireEvent.change(date, { target: { value: '2025-12-20' } })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    const items = await screen.findAllByRole('listitem')
    expect(items.length).toBe(2)
  })

  it('[@req:F003-S17] 显示余票信息', async () => {
    render(<SearchPage />)
    const from = screen.getByLabelText('from')
    const to = screen.getByLabelText('to')
    const date = screen.getByLabelText('date')
    fireEvent.change(from, { target: { value: 'Beijing' } })
    fireEvent.change(to, { target: { value: 'Shanghai' } })
    fireEvent.change(date, { target: { value: '2025-12-20' } })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    const count = await screen.findByLabelText('result-count')
    expect(count.textContent).toContain('2')
  })

  it('[@req:F005-S01] 仅显示有票开关影响列表', async () => {
    render(<SearchPage />)
    const from = screen.getByLabelText('from')
    const to = screen.getByLabelText('to')
    const date = screen.getByLabelText('date')
    fireEvent.change(from, { target: { value: 'Beijing' } })
    fireEvent.change(to, { target: { value: 'Shanghai' } })
    fireEvent.change(date, { target: { value: '2025-12-20' } })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    const count = await screen.findByLabelText('result-count')
    expect(count.textContent).toContain('2')
    fireEvent.click(screen.getByLabelText('onlyAvailable'))
    const count2 = await screen.findByLabelText('result-count')
    expect(count2.textContent).toContain('1')
  })
})