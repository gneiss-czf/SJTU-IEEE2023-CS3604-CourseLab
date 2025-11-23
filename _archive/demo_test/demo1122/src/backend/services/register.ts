const users = new Set<string>()

export function isPhoneRegistered(phone: string): boolean {
  return users.has(phone)
}

export function createAccount(phone: string, password: string): { id: string; phone: string } {
  users.add(phone)
  return { id: `U-${Date.now()}`, phone }
}