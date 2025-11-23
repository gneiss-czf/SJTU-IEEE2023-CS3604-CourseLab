export function clearToken() {
  try {
    localStorage.removeItem('token')
  } catch {}
}

export function clearSession() {
  try {
    sessionStorage.clear()
  } catch {}
}

export function logLogout(userId: string): string {
  return `logout-${userId}-${Date.now()}`
}