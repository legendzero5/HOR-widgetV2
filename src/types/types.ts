import type { DateRange } from "react-day-picker";
interface Rooms {
    id: number
    room_id: string
    room_name: string
    qty: number
    propertyId: string
    descriptions: string
    featured: boolean
    num_baths: number
    num_bedrooms: number
    num_beds: number
    num_guests: number
    type: number
    status: boolean
    urlslug: string
    rates: number
    totalRates: number
    totalNights: number
    images: {
        id: number
        roomId: number
        url: string
        order: number
    }[]
    property: {
        name: string
        number_of_units: number
        address: string
        city: string
        country: string
        coverImage: string
        published: boolean
    }
}

export interface BookingData {
    dateRange: DateRange | undefined;
    adults: number; // usia 13+
    children: number; // usia <13
    rooms: number;
    selectedRoom: Rooms | null;
}

export type DateForRange = [Date | null, Date | null];

export interface RawPropertyAvailability {
    date: string;
    numAvail: number;
    minStay: number;
    maxStay: number;
    price: number;
    override: string;
}

export interface PropertyAvailabilityResponse {
    availability: RawPropertyAvailability[];
}

export interface BookingDatePickerProps {
    booking: BookingData;
    setBooking: React.Dispatch<React.SetStateAction<BookingData>>;
    dateRange: DateForRange;
    setDateRange: React.Dispatch<React.SetStateAction<DateForRange>>;
    propertyId?: string | null;
    availableDates: Date[];
    availabilityData: RawPropertyAvailability[];
    startDate: Date | null;
    endDate: Date | null;
    onChange: (dates: [Date | null, Date | null]) => void;
}