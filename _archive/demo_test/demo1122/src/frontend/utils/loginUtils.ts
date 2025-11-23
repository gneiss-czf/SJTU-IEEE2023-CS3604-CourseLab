export function isValidPhone(phone: string): boolean {
  return /^1\d{10}$/.test(phone)
}

export function shouldEnableCaptcha(failCount: number): boolean {
  return failCount >= 3
}

export function isValidCode(code: string): boolean {
  return /^\d{6}$/.test(code)
}

export function isCodeWithinExpiry(createdAtMs: number, nowMs: number, minutes = 5): boolean {
  const diff = nowMs - createdAtMs
  return diff <= minutes * 60 * 1000
}

export function isFormValid(phone: string, code: string): boolean {
  return isValidPhone(phone) && isValidCode(code)
}