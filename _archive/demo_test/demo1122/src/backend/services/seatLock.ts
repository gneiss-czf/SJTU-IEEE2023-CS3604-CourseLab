export type SeatLock = { lockId: string; seats: number; expiresAt: number }

export function lockSeats(seats: number, now: number, minutes = 15): SeatLock {
  const expiresAt = now + minutes * 60 * 1000
  return { lockId: `LOCK-${Date.now()}`, seats, expiresAt }
}