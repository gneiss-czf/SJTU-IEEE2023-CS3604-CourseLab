export function checkCredentials(username: string, password: string): boolean {
  return username === 'user001' && password === 'P@ssw0rd'
}

export function generateToken(username: string): string {
  const ts = Date.now()
  return `token-${username}-${ts}`
}