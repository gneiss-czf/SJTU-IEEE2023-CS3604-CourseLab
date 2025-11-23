export function isValidCertificateId(id: string): boolean {
  if (!/^[0-9]{17}[0-9Xx]$/.test(id)) return false
  return true
}

export function isValidPassport(id: string): boolean {
  return /^[A-Z0-9]{6,18}$/.test(id)
}

export function isValidPermit(id: string): boolean {
  return /^[A-Z0-9]{6,18}$/.test(id)
}