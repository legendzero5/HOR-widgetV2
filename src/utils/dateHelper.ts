import { toZonedTime, format as tzFormat } from 'date-fns-tz'
import { formatDistanceToNow } from 'date-fns'

const timeZone = 'Asia/Makassar'

export const formatZonedDate = (date: Date) => {
    const zonedTime = toZonedTime(date, timeZone)
    return tzFormat(zonedTime, 'yyyy-MM-dd', { timeZone })
}

export const formatDistanceToDay = (date: Date) => {
    const zonedTime = toZonedTime(date, timeZone)
    return formatDistanceToNow(zonedTime, { addSuffix: true })
}
