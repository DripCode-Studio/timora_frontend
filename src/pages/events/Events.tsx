import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@/components/events/FullCalendar";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import CalendarFilters from "@/components/events/CalendarFilters";
import type { CalendarEvent } from "@/components/events/FullCalendar";
import { sampleEvents } from "@/data/sampleEvents";

function Events() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState<CalendarEvent[]>(sampleEvents);

  const handleDateChange = (date: Date) => {
    setCurrentDate(date);
  };

  const handleAddEvent = (date?: Date) => {
    // Navigate to add event page
    navigate("/app/events/add", {
      state: { selectedDate: date || currentDate },
    });
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Main Calendar Area - Full Width at Top */}
      <div className="flex-1 p-3 md:p-6">
        <FullCalendar
          events={events}
          initialDate={currentDate}
          onDateChange={handleDateChange}
          onAddEvent={handleAddEvent}
        />
      </div>

      {/* Bottom Section - Two Columns on Desktop */}
      <div className="flex flex-col lg:flex-row gap-4 p-3 md:p-6 pt-0 md:pt-0">
        {/* Left Column - Upcoming Events */}
        <div className="flex-1 lg:flex-1">
          <UpcomingEvents events={events} />
        </div>

        {/* Right Column - Filters and Controls */}
        <div className="flex-1 lg:flex-1">
          <CalendarFilters
            events={events}
            onAddEvent={() => handleAddEvent()}
          />
        </div>
      </div>
    </div>
  );
}

export default Events;
