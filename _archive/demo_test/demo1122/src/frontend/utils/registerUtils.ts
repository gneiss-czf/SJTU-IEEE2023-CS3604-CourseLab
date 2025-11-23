export function isValidPhone(phone: string): boolean {
  return /^1\d{10}$/.test(phone)
}

export function isValidCode(code: string): boolean {
  return /^\d{6}$/.test(code)
}

export function isValidPassword(pwd: string): boolean {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(pwd)
}

export function confirmPassword(pwd: string, confirm: string): boolean {
  return pwd === confirm
}