import { useState } from 'react'

export default function PassengerPicker({ max = 5 }: { max?: number }) {
  const [count, setCount] = useState(0)
  const inc = () => setCount(c => Math.min(max, c + 1))
  const dec = () => setCount(c => Math.max(0, c - 1))
  return (
    <div>
      <button aria-label="dec" onClick={dec}>-</button>
      <span aria-label="count">{count}</span>
      <button aria-label="inc" onClick={inc} disabled={count >= max}>+</button>
    </div>
  )
}