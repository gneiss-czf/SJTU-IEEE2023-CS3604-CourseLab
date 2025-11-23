export function formatCountdown(ms: number): string {
  const m = Math.max(0, Math.floor(ms / 60000))
  const s = Math.max(0, Math.floor((ms % 60000) / 1000))
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function isCritical(ms: number): boolean {
  return ms <= 5 * 60 * 1000 && ms > 0
}

export function isExpired(ms: number): boolean {
  return ms <= 0
}