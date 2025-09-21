import React, { useState } from "react";

interface CalendarProps {
  initialDate?: Date;
  onDateChange?: (date: Date) => void;
}

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getStartOfWeek(date: Date) {
  // Monday as first day of week
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  const start = new Date(date);
  start.setDate(date.getDate() + diff);
  start.setHours(0, 0, 0, 0);
  return start;
}

const Calendar: React.FC<CalendarProps> = ({ initialDate, onDateChange }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate || today);

  const startOfWeek = getStartOfWeek(selectedDate);
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateChange?.(date);
  };

  return (
    <div className="w-full p-4 border border-gray-200 rounded-lg md:hidden">
      <div className="font-medium mb-2">This Week</div>
      <div className="flex gap-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="flex-1 text-center text-xs text-gray-400">
            {day}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        {weekDates.map((date, i) => {
          const isActive = date.toDateString() === selectedDate.toDateString();
          return (
            <button
              key={i}
              onClick={() => handleDateClick(date)}
              className={
                `flex-1 h-10 rounded-full font-semibold text-base transition-colors ` +
                (isActive
                  ? "bg-[#181C23] text-white outline-2 outline-[#181C23] shadow"
                  : "bg-gray-100 text-[#181C23] hover:bg-gray-200")
              }
              type="button"
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
