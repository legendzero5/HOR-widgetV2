import { useCallback, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/custom-datepicker.css";
import { useMediaQuery } from "react-responsive";
import type { RawPropertyAvailability } from "@/types/types";
import { formatZonedDate } from "@/utils/dateHelper";

interface CustomDatePickerProps {
    startDate: Date | null;
    endDate: Date | null;
    onChange: (dates: [Date | null, Date | null]) => void;
    propertyId?: string | null;
    availableDates: Date[];
    availabilityData: RawPropertyAvailability[];
    // minStay: number | null;
}

export default function CustomDatePicker({
    startDate,
    endDate,
    onChange,
    availableDates,
    // propertyId,
    availabilityData,

}: CustomDatePickerProps) {
    const isMobile = useMediaQuery({ maxWidth: 992 });
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // console.log(`Property Id: ${propertyId}`);

    // Buat Set untuk ngecek available date dengan cepat
    const availableDatesSet = useMemo(
        () => new Set(availableDates.map(d => formatZonedDate(d))),
        [availableDates]
    );


    const minStay = useMemo(() => {
        if (!startDate) return null;
        const startStr = formatZonedDate(startDate);
        const match = availabilityData.find(
            item => item.date.split("T")[0] === startStr
        );
        return match?.minStay ?? null;
    }, [startDate, availabilityData]);

    // Filter tanggal yang bisa dipilih
    const isDateSelectable = useCallback(
        (date: Date) => {
            const dateStr = formatZonedDate(date);

            // Disable kalau gak ada di available list
            if (!availableDatesSet.has(dateStr)) return false;

            // Kalau sudah pilih startDate & ada minStay, batasi endDate
            if (startDate && minStay && date > startDate) {
                const diffDays = Math.ceil(
                    (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
                );
                if (diffDays < minStay) return false;
            }

            return true;
        },
        [availableDatesSet, startDate, minStay]
    );



    return (
        <DatePicker
            inline
            selectsRange
            monthsShown={isMobile ? 1 : 2}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
            isClearable
            filterDate={isDateSelectable}
            calendarClassName="custom-calendar"
            minDate={today}
        />
    );
}
