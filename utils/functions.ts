import type { CvEvent } from '~/types/cvfy'

export function orderEvents(arr: CvEvent[]): CvEvent[] {
  return [...arr].sort((a, b) => {
    // Current (ongoing) items should appear first
    if (a.current && !b.current) return -1
    if (!a.current && b.current) return 1
    
    // If both are current or both are not current, sort by end date
    return new Date(b.to).getTime() - new Date(a.to).getTime()
  })
}
