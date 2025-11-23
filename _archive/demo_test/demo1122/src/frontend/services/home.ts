export function getQuickEntries(): string[] {
  return ['车票查询', '我的订单', '帮助']
}

export function calcGreeting(hour: number): string {
  if (hour < 6) return '凌晨好'
  if (hour < 12) return '上午好'
  if (hour < 18) return '下午好'
  return '晚上好'
}