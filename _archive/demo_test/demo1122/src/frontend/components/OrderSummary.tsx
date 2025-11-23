import { useState } from 'react'

export default function OrderSummary({ count, pricePerSeat }: { count: number; pricePerSeat: number }) {
  const [submitted, setSubmitted] = useState(false)
  const total = count * pricePerSeat
  const canSubmit = count > 0 && !submitted
  return (
    <div>
      <div aria-label="summary-total">总价 {total}</div>
      <button aria-label="submit" disabled={!canSubmit} onClick={() => setSubmitted(true)}>提交订单</button>
    </div>
  )
}