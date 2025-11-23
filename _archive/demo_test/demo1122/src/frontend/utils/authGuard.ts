export function requiresAuth(path: string): boolean {
  return ['/profile', '/orders'].includes(path)
}

export function canAccess(path: string, isAuthed: boolean): boolean {
  if (!requiresAuth(path)) return true
  return isAuthed
}