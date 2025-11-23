export function saveDraft(data: any) {
  try {
    const s = JSON.stringify(data)
    localStorage.setItem('order-draft', s)
  } catch {}
}

export function loadDraft(): any | null {
  try {
    const s = localStorage.getItem('order-draft')
    if (!s) return null
    return JSON.parse(s)
  } catch {
    return null
  }
}