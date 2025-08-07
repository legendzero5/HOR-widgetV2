import useSWR from "swr"
import { format } from "date-fns"
import axios from "axios"

const fetcher = async (url: string) => {
    const res = await axios.get(url)
    if (!res.data) throw new Error("Failed to fetch")
    return res.data()
}

export const useAvailableRooms = (
    propertyId?: string | null,
    dateRange?: { from: Date; to: Date }
) => {
    const arrival = dateRange?.from ? format(dateRange.from, "yyyy-MM-dd") : null
    const departure = dateRange?.to ? format(dateRange.to, "yyyy-MM-dd") : null

    const shouldFetch = propertyId && arrival && departure

    const { data, error, isLoading } = useSWR(
        shouldFetch
            ? `http://localhost:5900/v1/rooms/available?propertyId=${propertyId}&arrival=${arrival}&departure=${departure}`
            : null,
        fetcher
    )

    return {
        data,
        error,
        isLoading,
    }
}
