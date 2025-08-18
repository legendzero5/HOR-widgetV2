import { Users } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import type { BookingData } from "@/types/types";

interface BookingGuestsProps {
    booking: BookingData;
    setBooking: React.Dispatch<React.SetStateAction<BookingData>>;
}

export default function BookingGuests({ booking, setBooking }: BookingGuestsProps) {
    return (
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
    );
}