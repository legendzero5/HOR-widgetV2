
import { useState, useEffect, useRef, useCallback } from "react"
import { Calendar, Users, Bed, Check, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { format, differenceInDays, addDays } from "date-fns"
import type { DateRange } from "react-day-picker"
import "react-datepicker/dist/react-datepicker.css"
import CustomDatePicker from "./CustomDatePicker"
import BookingGuests from "./GuestPickerSection"
import BookingDatePicker from "./DatePickerSection"
import type { PropertyAvailabilityResponse, RawPropertyAvailability } from "@/types/types"
// import { useAvailableRooms } from "@/lib/useAvailableRooms"

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
    // room_availability?: { date: string }[]

}
export interface BookingData {
    dateRange: DateRange | undefined
    adults: number // usia 13+
    children: number // usia <13
    rooms: number
    selectedRoom: Rooms | null
}

export type DateForRange = [Date | null, Date | null];



export default function BookingWidget({ propertyId }: { propertyId: string | null }) {
    const [booking, setBooking] = useState<BookingData>({
        dateRange: {
            from: new Date(),
            to: addDays(new Date(), 2),
        },
        adults: 2,
        children: 0,
        rooms: 1,
        selectedRoom: null,
    });

    const [dateRange, setDateRange] = useState<DateForRange>([null, null]);
    const [startDate, endDate] = dateRange;
    const [isOpen, setIsOpen] = useState(true); // untuk hamburger menu
    const [searchDone, setSearchDone] = useState(false);
    const [rooms, setRooms] = useState<Rooms[]>([])
    // const [filteredRooms, setFilteredRooms] = useState<Rooms[]>([]);
    const [availableDates, setAvailableDates] = useState<Date[]>([]);
    const [availabilityData, setAvailabilityData] = useState<RawPropertyAvailability[]>([]);
    const [loading, setLoading] = useState(true);
    const [showSticky, setShowSticky] = useState(false);
    // const [minStay, setMinStay] = useState<number | null>(null);
    const [searchParams, setSearchParams] = useState<null | {
        arrival: string;
        departure: string;
    }>(null);
    const summaryRef = useRef<HTMLDivElement | null>(null);

    // Show sticky summary only when villa selected
    useEffect(() => {
        setShowSticky(!!booking.selectedRoom);
    }, [booking.selectedRoom]);

    // IntersectionObserver for hide sticky
    useEffect(() => {
        const target = summaryRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Hilangkan sticky kalau element terlihat
                    setShowSticky(false);
                } else if (booking.selectedRoom) {
                    // Tampilkan sticky kalau villa dipilih tapi element tidak terlihat
                    setShowSticky(true);
                }
            },
            { threshold: 0.1 } // 10% terlihat saja sudah dianggap muncul
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, [booking.selectedRoom]);

    // Format Currency
    const formatCurrency = (amount: number) => {
        if (typeof amount !== 'number') return 'N/A';
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const [nights, setNights] = useState(0)
    // const [totalPrice, setTotalPrice] = useState(0)

    const selectRoom = (room: Rooms) => {
        setBooking((prev) => ({
            ...prev,
            selectedRoom: prev.selectedRoom?.id === room.id ? null : room
        }));
    };

    // const totalGuests = booking.adults + booking.children;

    const isBookingAllowed =
        !!booking.dateRange?.from &&
        !!booking.dateRange?.to &&
        (booking.adults + booking.children) > 0;




    // Fetch availability sekali di awal
    useEffect(() => {
        if (!propertyId) return;
        const fetchAvailability = async () => {
            try {
                setLoading(true);
                const url = `http://localhost:5900/v1/properties/${propertyId}/availability`;
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data: PropertyAvailabilityResponse = await res.json();

                setAvailabilityData(data.availability);
                setAvailableDates(
                    data.availability
                        .filter(item => item.numAvail > 0)
                        .map(item => new Date(item.date))
                );
            } catch (err) {
                console.error("Fetch availability error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAvailability();
    }, [propertyId]);




    useEffect(() => {
        if (!propertyId) return
        // console.log(`Booking from : ${booking.dateRange?.from}`);
        // console.log(`Booking to : ${booking.dateRange?.to}`);

        const query = new URLSearchParams({
            propertyId,
        })

        setLoading(true)

        fetch(`http://localhost:5900/v1/rooms/available?${query.toString()}`)
            .then((res) => res.json())
            .then((data) => {
                setRooms(data.data || [])
                setLoading(false)
            })
            .catch((err) => {
                console.error('Error fetching rooms:', err)
                setLoading(false)
            })


    }, [propertyId])

    // Calculate nights and total price when dates change
    useEffect(() => {
        if (booking.dateRange?.from && booking.dateRange?.to && booking.selectedRoom) {
            const nightsCount = differenceInDays(booking.dateRange.to, booking.dateRange.from)
            setNights(nightsCount)
            // setTotalPrice(nightsCount * booking.selectedRoom.rates * booking.rooms)
        } else {
            setNights(0)
            // setTotalPrice(0)
        }
    }, [booking.dateRange, booking.selectedRoom, booking.rooms])


    // Click handler ringan
    const handleSearchClick = useCallback(() => {
        if (!booking.dateRange?.from || !booking.dateRange?.to) {
            alert("Please select dates to search");
            return;
        }
        setSearchDone(false);
        setSearchParams({
            arrival: format(booking.dateRange.from, "yyyy-MM-dd"),
            departure: format(booking.dateRange.to, "yyyy-MM-dd"),
        });
    }, [booking.dateRange]);

    // Effect terpisah untuk fetch rooms
    useEffect(() => {
        if (!searchParams || !propertyId) return;
        const fetchRooms = async () => {
            try {
                setLoading(true);
                const queryParams = new URLSearchParams({
                    propertyId,
                    arrival: searchParams.arrival,
                    departure: searchParams.departure,
                    guests_adult: booking.adults.toString(),
                    guests_children: booking.children.toString(),
                });
                const res = await fetch(`http://localhost:5900/v1/rooms/available?${queryParams}`);
                const result = await res.json();
                const fetchedRooms = result.data || [];

                setRooms(fetchedRooms);
                setBooking(prev => ({
                    ...prev,
                    selectedRoom: fetchedRooms.length > 0 ? prev.selectedRoom : null
                }));
                setSearchDone(true);
            } catch (err) {
                console.error("Fetch rooms error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, [searchParams, propertyId, booking.adults, booking.children]);



    const handleBookNow = () => {
        if (!booking.selectedRoom || !booking.dateRange?.from || !booking.dateRange?.to) return;

        const params = new URLSearchParams({
            roomId: booking.selectedRoom.room_id,
            propertyId: booking.selectedRoom.propertyId ?? "",
            adultGuest: String(booking.adults ?? 0),
            childrenGuest: String(booking.children ?? 0),
            nights: String(nights ?? 0),
        });

        window.location.href = `http://localhost:3001/en/checkout?${params.toString()}`;
    };




    return (
        <div className=" bg-gray-50">
            {/* Header */}
            {/* <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Canggu Villa Rentals</h1>
                            <div className="flex items-center gap-2 text-gray-600 mt-1">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">Canggu, Bali</span>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">4.9</span>
                            </div>
                            <span className="text-gray-600 text-sm">(1,847 reviews)</span>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Room Selection Section */}
                    <div className="lg:col-span-2">
                        {/* <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Villa</h2>
                            <p className="text-gray-600">Discover our handpicked collection of luxury villas in Canggu</p>
                        </div> */}

                        {/* Full Width Search Bar with Margins */}
                        <div className="my-3">
                            {/* <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                                <CardContent className="p-0">
                                    
                                </CardContent>
                            </Card> */}

                            {/* Mobile Version */}
                            <div className="lg:hidden mb-4 shadow-md">
                                {/* Trigger Accordion */}
                                <Button
                                    variant="outline"
                                    className="w-full flex justify-between items-center cursor-pointer bg-white p-8"
                                    onClick={() => setIsOpen((prev) => !prev)}
                                >
                                    <span className="font-medium text-2xl">Search Villa</span>
                                    {isOpen ? (
                                        <ChevronDown className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <ChevronRight className="h-5 w-5 text-gray-500" />
                                    )}
                                </Button>

                                {/* Accordion Content */}
                                {isOpen && (
                                    <div className="mt-3 flex flex-col gap-3">
                                        {/* Date Picker */}
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline" className="justify-start">
                                                    <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                                                    {booking.dateRange?.from && booking.dateRange?.to
                                                        ? `${format(booking.dateRange.from, "MMM dd")} - ${format(
                                                            booking.dateRange.to,
                                                            "MMM dd"
                                                        )}`
                                                        : "Select dates"}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-full p-0" align="start">
                                                <CustomDatePicker
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    onChange={(update) => {
                                                        const [start, end] = update as [Date | null, Date | null];
                                                        setDateRange([start, end]);
                                                        setBooking((prev) => ({
                                                            ...prev,
                                                            dateRange: start
                                                                ? { from: start, to: end ?? undefined }
                                                                : undefined,
                                                        }));
                                                    }}
                                                    propertyId={propertyId}
                                                    availableDates={availableDates}
                                                    availabilityData={availabilityData}
                                                />
                                            </PopoverContent>
                                        </Popover>

                                        {/* Guests Picker */}
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline" className="justify-start">
                                                    <Users className="h-5 w-5 mr-2 text-gray-400" />
                                                    {booking.adults + booking.children} guests
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <div className="p-4 space-y-4">
                                                    {/* Adults */}
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="font-medium">Guests</div>
                                                            <div className="text-sm text-gray-500">Ages 13 or above</div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="h-8 w-8 p-0 bg-transparent"
                                                                onClick={() =>
                                                                    setBooking((prev) => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))
                                                                }
                                                                disabled={booking.adults <= 1}
                                                            >
                                                                -
                                                            </Button>
                                                            <span className="w-8 text-center font-medium">{booking.adults}</span>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="h-8 w-8 p-0 bg-transparent"
                                                                onClick={() =>
                                                                    setBooking((prev) => ({ ...prev, adults: Math.min(12, prev.adults + 1) }))
                                                                }
                                                                disabled={booking.adults >= 12}
                                                            >
                                                                +
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    {/* Children */}
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="font-medium">Guests</div>
                                                            <div className="text-sm text-gray-500">Children (below 13)</div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="h-8 w-8 p-0 bg-transparent"
                                                                onClick={() =>
                                                                    setBooking((prev) => ({ ...prev, children: Math.max(0, prev.children - 1) }))
                                                                }
                                                                disabled={booking.children <= 0}
                                                            >
                                                                -
                                                            </Button>
                                                            <span className="w-8 text-center font-medium">{booking.children}</span>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="h-8 w-8 p-0 bg-transparent"
                                                                onClick={() =>
                                                                    setBooking((prev) => ({ ...prev, children: Math.min(12, prev.children + 1) }))
                                                                }
                                                                disabled={booking.children >= 12}
                                                            >
                                                                +
                                                            </Button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </PopoverContent>
                                        </Popover>

                                        {/* Search Button */}
                                        <Button
                                            className="w-full bg-[#5c8252] hover:bg-[#8A9B7A] text-white"
                                            onClick={handleSearchClick}
                                        >
                                            Search
                                        </Button>
                                    </div>
                                )}

                            </div>

                            {/* Desktop Version */}
                            <div className="hidden lg:flex flex-col sm:flex-row border rounded-lg overflow-hidden relative">
                                {/* Date Selection */}
                                <BookingDatePicker
                                    booking={booking}
                                    setBooking={setBooking}
                                    dateRange={dateRange}
                                    setDateRange={setDateRange}
                                    propertyId={propertyId}
                                    availableDates={availableDates}
                                    availabilityData={availabilityData}
                                />

                                {/* Vertical divider */}
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-px bg-gray-300" />

                                {/* Guests Selection */}
                                <BookingGuests booking={booking} setBooking={setBooking} />

                                {/* Search Icon - Positioned absolutely inside the search bar */}
                                <Button
                                    onClick={() => handleSearchClick()}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#5c8252] hover:bg-[#8A9B7A] text-white rounded-full p-3 h-12 w-12 flex items-center justify-center transition-colors duration-200 shadow-sm"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </Button>
                            </div>

                        </div>


                        {/* Villa Cards */}
                        {loading ? (
                            <div className="space-y-6">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div key={i} className="animate-pulse rounded-lg border p-6 space-y-4 bg-white shadow-sm">
                                        <div className="h-48 bg-gray-200 rounded-md" />
                                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                                        <div className="h-4 bg-gray-200 rounded w-full" />
                                        <div className="h-4 bg-gray-200 rounded w-2/3" />
                                        <div className="h-10 bg-gray-200 rounded mt-4" />
                                    </div>
                                ))}
                            </div>
                        ) : rooms.length === 0 ? (
                            <div className="text-center text-gray-500 text-lg font-medium py-10">
                                No Available Rooms
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {rooms.map((room) => (
                                    <Card
                                        key={room.id}
                                        className={`transition-all duration-200 hover:shadow-lg ${booking.selectedRoom?.id === room.id ? "ring-2 ring-[#5c8252]" : ""
                                            }`}
                                    >
                                        <CardContent className="p-0">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                                                {/* Villa Image */}
                                                <div className="relative">
                                                    <img
                                                        src={room.images[0]?.url || "/placeholder.svg"}
                                                        alt={room.room_name}
                                                        className="w-full h-48 object-cover rounded-lg"
                                                    />
                                                    {room.featured && (
                                                        <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                                                            Featured
                                                        </Badge>
                                                    )}
                                                </div>

                                                {/* Villa Details */}
                                                <div className="md:col-span-1">
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                        {room.room_name}
                                                    </h3>
                                                    <div
                                                        className="text-gray-600 text-sm mb-4 line-clamp-3"
                                                        dangerouslySetInnerHTML={{ __html: room.descriptions }}
                                                    />
                                                    <div className="space-y-2 mb-4">
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <Users className="w-4 h-4 mr-2" />
                                                            Up to {room.num_guests} guests
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <Bed className="w-4 h-4 mr-2" />
                                                            {room.num_bedrooms} bedrooms, {room.num_beds} beds
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <h4 className="font-medium text-gray-900">Location</h4>
                                                        <p className="text-sm text-gray-600">
                                                            {room.property?.address}, {room.property?.city}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Pricing & Selection */}
                                                {searchDone && (
                                                    <div className="flex flex-col justify-between">
                                                        <div className="text-right mb-4">
                                                            <div className="flex items-center justify-end gap-2 mb-2">
                                                                <span className="text-2xl font-bold text-gray-900">
                                                                    {formatCurrency(room.totalRates)}
                                                                </span>
                                                            </div>
                                                            <p className="text-sm text-gray-600">per night</p>
                                                            {/* {room.totalNights > 0 && (
                                                                <p className="text-sm text-gray-500">
                                                                    Total {room.totalNights} nights: {formatCurrency(room.totalRates)}
                                                                </p>
                                                            )} */}
                                                        </div>

                                                        <Button
                                                            onClick={() => selectRoom(room)}
                                                            disabled={!isBookingAllowed}
                                                            className={`w-full ${booking.selectedRoom?.id === room.id ? "bg-green-600 hover:bg-green-700" : ""} ${!isBookingAllowed ? "opacity-50 cursor-not-allowed" : ""}`}
                                                        >
                                                            {booking.selectedRoom?.id === room.id ? (
                                                                <>
                                                                    <Check className="w-4 h-4 mr-2" />
                                                                    Selected
                                                                </>
                                                            ) : (
                                                                "Select Villa"
                                                            )}
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Booking Summary */}
                    <div ref={summaryRef} className="lg:col-span-1">
                        <div className="h-fit sticky top-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        Booking Summary
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {booking.selectedRoom ? (
                                        <div className="space-y-4">
                                            {/* Selected Villa */}
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Selected Villa</h4>
                                                <div className="bg-blue-50 rounded-lg py-3 px-4">
                                                    <p className="font-medium">{booking.selectedRoom.room_name}</p>
                                                </div>
                                            </div>

                                            <Separator />

                                            {/* Booking Details */}
                                            <div className="space-y-3">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600">Check-in:</span>
                                                    <span className="font-medium">
                                                        {booking.dateRange?.from
                                                            ? format(booking.dateRange.from, "MMM dd, yyyy")
                                                            : "Not selected"}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600">Check-out:</span>
                                                    <span className="font-medium">
                                                        {booking.dateRange?.to
                                                            ? format(booking.dateRange.to, "MMM dd, yyyy")
                                                            : "Not selected"}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600">Adults:</span>
                                                    <span className="font-medium">{booking.adults ?? 0}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600">Children:</span>
                                                    <span className="font-medium">{booking.children ?? 0}</span>
                                                </div>
                                                {nights > 0 && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">Nights:</span>
                                                        <span className="font-medium">{nights}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Book Now Button */}
                                            <Button
                                                className="w-full mt-6"
                                                size="lg"
                                                onClick={handleBookNow}
                                                disabled={!booking.dateRange?.from || !booking.dateRange?.to}
                                            >
                                                Book Now
                                            </Button>
                                        </div>
                                    ) : (
                                            <p className="text-gray-500 text-sm">No villa selected</p>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    {/* Mobile Sticky Booking Summary */}
                    {showSticky && (
                        <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white shadow-md border-t p-4 flex items-center justify-between">
                            <div className="flex-1">
                                <p className="font-medium text-gray-900 truncate">{booking.selectedRoom?.room_name}</p>
                            </div>
                            <Button
                                size="sm"
                                className="ml-4 bg-green-600 hover:bg-green-700"
                                onClick={handleBookNow}
                                disabled={!booking.dateRange?.from || !booking.dateRange?.to}
                            >
                                Book Now
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
