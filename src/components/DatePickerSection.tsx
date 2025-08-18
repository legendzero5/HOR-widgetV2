import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "lucide-react";
import CustomDatePicker from "./CustomDatePicker";
import { format } from "date-fns";
import type { BookingData, DateForRange, RawPropertyAvailability } from "@/types/types";

interface BookingDatePickerProps {
    booking: BookingData;
    setBooking: React.Dispatch<React.SetStateAction<BookingData>>;
    dateRange: DateForRange;
    setDateRange: React.Dispatch<React.SetStateAction<DateForRange>>;
    propertyId?: string | null;
    availableDates: Date[];
    availabilityData: RawPropertyAvailability[];
}

export default function BookingDatePicker({
    booking,
    setBooking,
    dateRange,
    setDateRange,
    propertyId,
    availableDates,
    availabilityData
}: BookingDatePickerProps) {
    const [startDate, endDate] = dateRange;

    return (
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
                <CustomDatePicker
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        const [start, end] = update as [Date | null, Date | null];
                        setDateRange([start, end]);
                        setBooking((prev) => ({
                            ...prev,
                            dateRange: start ? { from: start, to: end ?? undefined } : undefined,
                        }));
                    }}
                    propertyId={propertyId}
                    availableDates={availableDates}
                    availabilityData={availabilityData}
                />
            </PopoverContent>
        </Popover>
    );
}
