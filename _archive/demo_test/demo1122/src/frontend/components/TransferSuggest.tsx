import { suggestTransfers } from '../utils/transferUtils'

export default function TransferSuggest({ from, to, onSelect }: { from: string; to: string; onSelect?: (plan: any) => void }) {
  const plans = suggestTransfers(from, to)
  return (
    <ul aria-label="transfer-suggest">
      {plans.map((p, i) => (
        <li key={i}>
          <span>{p.firstDepartHour}:{p.secondDepartHour}</span>
          <button aria-label="select-plan" onClick={() => onSelect && onSelect(p)}>选择</button>
        </li>
      ))}
    </ul>
  )
}