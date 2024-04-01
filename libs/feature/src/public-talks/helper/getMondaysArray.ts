import { startOfWeek } from "date-fns"

export function getMondaysForNext26Weeks() {
    const currentMonday = startOfWeek(new Date(), { weekStartsOn: 1 })
    return Array.from({ length: 26 }, (_, i) =>
      currentMonday.getTime() + 7 * 24 * 60 * 60 * 1000 * i
    )
  }