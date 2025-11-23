export function canSubmit(payload: { passengers: number; seatClass?: string }): boolean {
  return payload.passengers > 0 && !!payload.seatClass
}