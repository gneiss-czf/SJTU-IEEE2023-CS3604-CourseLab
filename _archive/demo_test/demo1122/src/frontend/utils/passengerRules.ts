export function isPassengerCountValid(count: number, max = 5): boolean {
  return count > 0 && count <= max
}