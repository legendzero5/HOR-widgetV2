
import { useState, useEffect } from "react"
import { Calendar, Users, Bed, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { format, differenceInDays } from "date-fns"
import type { DateRange } from "react-day-picker"
// import { useAvailableRooms } from "@/lib/useAvailableRooms"

// interface Room {
//     id: string
//     name: string
//     description: string
//     image: string
//     price: number
//     originalPrice?: number
//     maxGuests: number
//     size: string
//     amenities: string[]
//     features: string[]
//     isPopular?: boolean
// }
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


// Gunakan ini untuk konsisten
interface BookingData {
    dateRange: DateRange | undefined
    adults: number // usia 13+
    children: number // usia <13
    rooms: number
    selectedRoom: Rooms | null
}


// const rooms2: Room[] = [
//     {
//         id: "1",
//         name: "Villa Eyla",
//         description: "Luxurious villa with stunning rice field views and private pool",
//         image: "/luxury-bali-villa-pool.png",
//         price: 450,
//         originalPrice: 520,
//         maxGuests: 6,
//         size: "120 m²",
//         amenities: ["Private Pool", "Rice Field View", "Full Kitchen", "Garden"],
//         features: ["Free WiFi", "Daily Cleaning", "Air Conditioning", "Safe"],
//         isPopular: true,
//     },
//     {
//         id: "2",
//         name: "Villa Akella",
//         description: "Modern tropical villa with open-air design and infinity pool",
//         image: "/placeholder-2jdy2.png",
//         price: 380,
//         maxGuests: 4,
//         size: "95 m²",
//         amenities: ["Infinity Pool", "Open Air Design", "Tropical Garden", "BBQ Area"],
//         features: ["Free WiFi", "Daily Cleaning", "Air Conditioning", "Safe"],
//     },
//     {
//         id: "3",
//         name: "Bedouin House",
//         description: "Unique bohemian-style accommodation with authentic Balinese charm",
//         image: "/bohemian-bedouin-house-bali.png",
//         price: 280,
//         originalPrice: 320,
//         maxGuests: 3,
//         size: "70 m²",
//         amenities: ["Bohemian Style", "Authentic Design", "Private Terrace", "Yoga Space"],
//         features: ["Free WiFi", "Daily Cleaning", "Fan Cooling", "Safe"],
//     },
//     {
//         id: "4",
//         name: "7 Seas Bingin",
//         description: "Beachfront villa with direct access to pristine Bingin Beach",
//         image: "/beachfront-villa-bingin-bali.png",
//         price: 650,
//         maxGuests: 8,
//         size: "180 m²",
//         amenities: ["Beach Access", "Ocean View", "Private Beach", "Surf Spot"],
//         features: ["Free WiFi", "Daily Cleaning", "Air Conditioning", "Safe"],
//     },
// ]

export default function BookingWidget({ propertyId }: { propertyId: string | null }) {
    const [booking, setBooking] = useState<BookingData>({
        dateRange: undefined,
        adults: 2,
        children: 0,
        rooms: 1,
        selectedRoom: null,
    });

    const [rooms, setRooms] = useState<Rooms[]>([])
    // const [filteredRooms, setFilteredRooms] = useState<Rooms[]>([]);

    const [loading, setLoading] = useState(true);

    const formatCurrency = (amount: number) => {
        if (typeof amount !== 'number') return 'N/A';
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const [nights, setNights] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const selectRoom = (room: Rooms) => {
        setBooking((prev) => ({
            ...prev,
            selectedRoom: prev.selectedRoom?.id === room.id ? null : room
        }));
    };

    const totalGuests = booking.adults + booking.children;

    const isBookingAllowed =
        !!booking.dateRange?.from &&
        !!booking.dateRange?.to &&
        (booking.adults + booking.children) > 0;

    useEffect(() => {
        if (!propertyId) return
        console.log(`Booking from : ${booking.dateRange?.from}`);
        console.log(`Booking to : ${booking.dateRange?.to}`);

        const query = new URLSearchParams({
            propertyId,
        })

        setLoading(true)

        fetch(`https://api.houseofreservations.com/v1/rooms/available?${query.toString()}`)
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
            setTotalPrice(nightsCount * booking.selectedRoom.rates * booking.rooms)
        } else {
            setNights(0)
            setTotalPrice(0)
        }
    }, [booking.dateRange, booking.selectedRoom, booking.rooms])

    const handleBooking = () => {
        if (!booking.selectedRoom || !booking.dateRange?.from || !booking.dateRange?.to) {
            alert("Please select room and dates")
            return
        }

        alert(
            `Booking confirmed for ${booking.selectedRoom.room_name}!\nCheck-in: ${format(booking.dateRange.from, "MMM dd, yyyy")}\nCheck-out: ${format(booking.dateRange.to, "MMM dd, yyyy")}\nTotal: $${totalPrice}`,
        )
    }

    const handleSearchClick = async () => {
        if (!booking.dateRange?.from || !booking.dateRange?.to) {
            alert("Please select dates to search");
            return;
        }

        const arrival = format(booking.dateRange.from, "yyyy-MM-dd");
        const departure = format(booking.dateRange.to, "yyyy-MM-dd");

        const nights = differenceInDays(booking.dateRange.to, booking.dateRange.from);
        console.log("Jumlah malam (nights):", nights);
        console.log("Tanggal check-in:", arrival);
        console.log("Tanggal check-out:", departure);

        const queryParams = new URLSearchParams({
            propertyId: propertyId ?? "",
            arrival,
            departure,
            guests_adult: booking.adults.toString(),
            guests_children: booking.children.toString(),
        });

        try {
            setLoading(true);

            const response = await fetch(`https://api.houseofreservations.com/v1/rooms/available?${queryParams.toString()}`);
            const result = await response.json();

            setRooms(result.data || []);
            setLoading(false);

            // Optional: update URL (history pushState)
            const queryUrl = `${window.location.pathname}?${queryParams.toString()}`;
            window.history.pushState({}, "", queryUrl);

            console.log("Fetched rooms with:", queryParams.toString());
        } catch (err) {
            console.error("Error fetching rooms:", err);
            setLoading(false);
        }
    };


    return (
        <div className="min-h-[2000px] bg-gray-50">
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
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Villa</h2>
                            <p className="text-gray-600">Discover our handpicked collection of luxury villas in Canggu</p>
                        </div>

                        {/* Full Width Search Bar with Margins */}
                        <div className="my-3">
                            {/* <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                                <CardContent className="p-0">
                                    
                                </CardContent>
                            </Card> */}
                            <div className="flex flex-col sm:flex-row border rounded-lg overflow-hidden relative">
                                {/* Date Selection */}
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="flex-1 h-auto p-6 rounded-none border-0 border-b sm:border-b-0 justify-start text-left font-normal hover:bg-gray-50"
                                        >
                                            <div className="flex items-center gap-4 w-full">
                                                <Calendar className="h-5 w-5 text-gray-400" />
                                                <div className="flex-1">
                                                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                                        Check-in • Check-out
                                                    </div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {booking.dateRange?.from && booking.dateRange?.to
                                                            ? `${format(booking.dateRange.from, "MMM dd")} - ${format(booking.dateRange.to, "MMM dd")}`
                                                            : "Add dates"}
                                                    </div>
                                                </div>
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <CalendarComponent
                                            mode="range"
                                            selected={booking.dateRange}
                                            onSelect={(range) => setBooking((prev) => ({ ...prev, dateRange: range }))}
                                            disabled={(date) => date < new Date()}
                                            numberOfMonths={typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1}
                                            className="rounded-md border"
                                        />
                                    </PopoverContent>
                                </Popover>

                                {/* Vertical divider */}
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-px bg-gray-300" />

                                {/* Guests Selection */}
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="flex-1 h-auto p-6 rounded-none border-0 justify-start text-left font-normal hover:bg-gray-50 pr-16"
                                        >
                                            <div className="flex items-center gap-4 w-full mx-2">
                                                <Users className="h-5 w-5 text-gray-400" />
                                                <div className="flex-1">
                                                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                                        Guests
                                                    </div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {booking.adults + booking.children} guests ({booking.adults} adults, {booking.children} children)
                                                    </div>
                                                </div>
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80" align="start">
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
                                        className={`transition-all duration-200 hover:shadow-lg ${booking.selectedRoom?.id === room.id ? "ring-2 ring-blue-500" : ""
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
                                                <div className="flex flex-col justify-between">
                                                    <div className="text-right mb-4">
                                                        <div className="flex items-center justify-end gap-2 mb-2">
                                                            <span className="text-2xl font-bold text-gray-900">
                                                                {formatCurrency(
                                                                    room.totalRates
                                                                )}

                                                            </span>

                                                        </div>
                                                        <p className="text-sm text-gray-600">per night</p>
                                                        {room.totalNights > 0 && (
                                                            <p className="text-sm text-gray-500">
                                                                Total {room.totalNights} nights:{" "}
                                                                {formatCurrency(room.totalRates)}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <Button
                                                        onClick={() => selectRoom(room)}
                                                        disabled={!isBookingAllowed}
                                                        className={`w-full ${booking.selectedRoom?.id === room.id
                                                            ? "bg-green-600 hover:bg-green-700"
                                                            : ""
                                                            } ${!isBookingAllowed ? "opacity-50 cursor-not-allowed" : ""}`}
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
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Booking Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-4">
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
                                                <div className="bg-blue-50 rounded-lg py-3">
                                                    <p className="font-medium ">{booking.selectedRoom.room_name}</p>
                                                    <p className="text-sm ">
                                                        {formatCurrency(
                                                            booking.selectedRoom.rates
                                                        )} per night
                                                    </p>
                                                </div>
                                            </div>

                                            <Separator />

                                            {/* Booking Details */}
                                            <div className="space-y-3">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600">Check-in:</span>
                                                    <span className="font-medium">
                                                        {booking.dateRange?.from ? format(booking.dateRange.from, "MMM dd, yyyy") : "Not selected"}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600">Check-out:</span>
                                                    <span className="font-medium">
                                                        {booking.dateRange?.to ? format(booking.dateRange.to, "MMM dd, yyyy") : "Not selected"}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600">Guests:</span>
                                                    <span className="font-medium">{totalGuests}</span>
                                                </div>
                                                {nights > 0 && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">Nights:</span>
                                                        <span className="font-medium">{nights}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <Separator />

                                            {/* Price Breakdown */}
                                            {nights > 0 && (
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">
                                                            {formatCurrency(
                                                                booking.selectedRoom.rates
                                                            )}  × {nights} nights
                                                        </span>
                                                        <span className="font-medium">
                                                            {formatCurrency(
                                                                totalPrice
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">Taxes & fees</span>
                                                        <span className="font-medium">${Math.round(totalPrice * 0.12)}</span>
                                                    </div>
                                                    <Separator />
                                                    <div className="flex justify-between text-lg font-bold">
                                                        <span>Total</span>
                                                        <span>${totalPrice + Math.round(totalPrice * 0.12)}</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Book Button */}
                                            <Button
                                                className="w-full mt-6"
                                                size="lg"
                                                onClick={handleBooking}
                                                disabled={!booking.dateRange?.from || !booking.dateRange?.to}
                                            >
                                                {!booking.dateRange?.from || !booking.dateRange?.to
                                                    ? "Select Dates to Book"
                                                    : `Book for $${totalPrice + Math.round(totalPrice * 0.12)}`}
                                            </Button>

                                            {/* Features */}
                                            <div className="mt-4 space-y-2">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    Free cancellation within 24 hours
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    No booking fees
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    Instant confirmation
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-8">
                                            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                            <p className="text-gray-500 mb-2">Select a villa to see booking details</p>
                                            <p className="text-sm text-gray-400">Choose your preferred villa from the options above</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
