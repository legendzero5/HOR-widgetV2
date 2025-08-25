import { useCallback, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/custom-datepicker.css";
import { useMediaQuery } from "react-responsive";
import type { RawPropertyAvailability } from "@/types/types";
import { formatZonedDate } from "@/utils/dateHelper";

// Definisikan tipe untuk bookedDates jika belum ada
interface BookedDateRange {
    startDate: Date;
    endDate: Date;
}

interface CustomDatePickerProps {
    startDate: Date | null;
    endDate: Date | null;
    onChange: (dates: [Date | null, Date | null]) => void;
    propertyId?: string | null;
    // Ganti availableDates dengan bookedDates agar lebih sesuai dengan logic
    bookedDates?: BookedDateRange[];
    availabilityData: RawPropertyAvailability[]; // Asumsi tipe ini memiliki: date, price, numAvail, minStay, maxStay, override
}

export default function CustomDatePicker({
    startDate,
    endDate,
    onChange,
    bookedDates = [], // Tambahkan prop bookedDates dengan default array kosong
    availabilityData,
}: CustomDatePickerProps) {
    const isMobile = useMediaQuery({ maxWidth: 992 });
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 1. Buat Map untuk lookup availability dengan cepat (Best Practice)
    const availabilityMap = useMemo(() => {
        const map = new Map<string, RawPropertyAvailability>();
        availabilityData.forEach(item => {
            map.set(item.date.split("T")[0], item);
        });
        return map;
    }, [availabilityData]);

    // 2. Pre-computation: Kumpulkan semua tanggal yang nonaktif karena berbagai alasan
    const excludedDates = useMemo(() => {
        const datesToExclude: Date[] = [];

        // Alasan #1: Aturan dari availability data (blackout, no price, etc.)
        availabilityData.forEach(item => {
            const itemDate = new Date(item.date);
            itemDate.setHours(0, 0, 0, 0);

            const isDisabled =
                !item.price || item.price <= 0 ||
                item.override === 'blackout' ||
                item.override === 'exception';

            if (isDisabled) {
                datesToExclude.push(itemDate);
            }
        });

        // Alasan #2: Tanggal yang sudah di-booking
        bookedDates.forEach(({ startDate, endDate }) => {
            const current = new Date(startDate);
            current.setHours(0, 0, 0, 0);

            // Ingat, endDate adalah hari checkout, jadi hari sebelumnya adalah malam terakhir
            const lastNight = new Date(endDate);
            lastNight.setDate(lastNight.getDate() - 1);
            lastNight.setHours(0, 0, 0, 0);

            while (current <= lastNight) {
                datesToExclude.push(new Date(current));
                current.setDate(current.getDate() + 1);
            }
        });

        return datesToExclude;
    }, [availabilityData, bookedDates]);



    // 3. Gabungkan semua logic filtering ke dalam satu fungsi
    const isDateSelectable = useCallback(
        (date: Date) => {
            const dateStr = formatZonedDate(date);
            const availability = availabilityMap.get(dateStr);

            if (!availability) return false;

            // 🔥 LOGIKA BARU DI SINI
            // Kondisi untuk memilih tanggal check-in:
            // 1. Belum ada startDate (pemilihan pertama).
            // 2. ATAU startDate dan endDate sudah lengkap (artinya klik berikutnya adalah awal pemilihan baru).
            if (!startDate || (startDate && endDate)) {
                // Jalankan validasi untuk check-in
                if (availability.override === 'noCheckIn' || availability.override === 'noCheckInOrCheckOut') {
                    return false;
                }
                return availability.numAvail > 0;
            }

            // Jika kode sampai di sini, artinya kita sedang memilih tanggal check-out
            // (`startDate` ada, `endDate` kosong).

            // Jika tanggal yang dievaluasi adalah startDate itu sendiri, biarkan aktif.
            if (formatZonedDate(date) === formatZonedDate(startDate)) {
                return true;
            }

            // Jalankan validasi untuk check-out (hanya untuk tanggal setelah startDate).
            if (date > startDate) {
                if (availability.override === 'noCheckOut' || availability.override === 'noCheckInOrCheckOut') {
                    return false;
                }
                const dayDiff = Math.ceil((date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
                const startAvailability = availabilityMap.get(formatZonedDate(startDate));
                if (startAvailability) {
                    if (startAvailability.minStay && dayDiff < startAvailability.minStay) return false;
                    if (startAvailability.maxStay && dayDiff > startAvailability.maxStay) return false;
                }
                const current = new Date(startDate);
                current.setDate(current.getDate() + 1);
                while (current < date) {
                    const currentStr = formatZonedDate(current);
                    const currentAvail = availabilityMap.get(currentStr);
                    if (!currentAvail || currentAvail.numAvail <= 0) {
                        return false;
                    }
                    current.setDate(current.getDate() + 1);
                }
                return true;
            }

            // Untuk tanggal sebelum startDate, nonaktifkan.
            return false;
        },
        [startDate, endDate, availabilityMap]
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
