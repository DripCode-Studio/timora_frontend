import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT_COLORS } from "@/types/events";
import { Link } from "react-router-dom";
import AddEventButton from "./AddEventButton";

export type CalendarView = "day" | "week" | "month" | "year";

export interface CalendarEvent {
  id: string;
  title: string;
  type: "lecture" | "study" | "personal" | "assignment";
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  room?: string;
  professor?: string;
  description?: string;
}

interface FullCalendarProps {
  events?: CalendarEvent[];
  initialDate?: Date;
  onDateChange?: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
  onAddEvent?: (date: Date) => void;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const FullCalendar: React.FC<FullCalendarProps> = ({
  events = [],
  initialDate = new Date(),
  onDateChange,
  // onEventClick,
  onAddEvent,
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [view, setView] = useState<CalendarView>("month");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Navigation functions
  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);

    if (view === "day") {
      newDate.setDate(currentDate.getDate() + (direction === "next" ? 1 : -1));
    } else if (view === "week") {
      newDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7));
    } else if (view === "month") {
      newDate.setMonth(
        currentDate.getMonth() + (direction === "next" ? 1 : -1)
      );
    } else if (view === "year") {
      newDate.setFullYear(
        currentDate.getFullYear() + (direction === "next" ? 1 : -1)
      );
    }

    setCurrentDate(newDate);
    onDateChange?.(newDate);
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    onDateChange?.(today);
  };

  // Get calendar days for month view
  const getMonthDays = useMemo(() => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  }, [currentDate]);

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.startDate);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  // Check if date is in current month
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  // Check if date is today
  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  // Render month view
  const renderMonthView = () => (
    <div className="bg-white rounded-lg border overflow-hidden">
      {/* Calendar header */}
      <div className="grid grid-cols-7 border-b">
        {DAYS_OF_WEEK.map((day) => (
          <div
            key={day}
            className="p-2 sm:p-4 text-center font-medium text-gray-600 border-r last:border-r-0"
          >
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden text-xs">{day.slice(0, 1)}</span>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {getMonthDays.map((date, index) => {
          const dayEvents = getEventsForDate(date);
          const isCurrentMonthDay = isCurrentMonth(date);
          const isTodayDay = isToday(date);

          return (
            <div
              key={index}
              className={`min-h-[80px] sm:min-h-[120px] p-1 sm:p-2 border-r border-b last:border-r-0 ${
                !isCurrentMonthDay ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-50 transition-colors cursor-pointer`}
              onClick={() => onAddEvent?.(date)}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs sm:text-sm font-medium ${
                    !isCurrentMonthDay
                      ? "text-gray-400"
                      : isTodayDay
                      ? "bg-blue-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs"
                      : "text-gray-900"
                  }`}
                >
                  {date.getDate()}
                </span>
                {dayEvents.length > 0 && (
                  <div className="text-xs text-gray-500">
                    <span className="hidden sm:inline">
                      {dayEvents.length > 3 ? `+${dayEvents.length - 3}` : ""}
                    </span>
                    <span className="sm:hidden">
                      {dayEvents.length > 2 ? `+${dayEvents.length - 2}` : ""}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                {dayEvents.slice(0, 3).map((event) => (
                  <Link
                    to={`/app/events/eventview/${event.id}`}
                    onClick={(e) => e.stopPropagation()}
                    key={event.id}
                    className={`text-xs p-1 block rounded w-full hover:cursor-pointer text-white cursor-pointer hover:opacity-80 transition-opacity`}
                    style={{ backgroundColor: EVENT_COLORS[event.type] }}
                  >
                    <div className="font-medium truncate">{event.title}</div>
                    <div className="opacity-90 hidden sm:block">
                      {event.startTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Render week view
  const renderWeekView = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });

    const hours = Array.from({ length: 24 }, (_, i) => i);

    return (
      <div className="bg-white rounded-lg border overflow-hidden">
        {/* Week header */}
        <div className="grid grid-cols-8 border-b">
          <div className="p-2 sm:p-4 border-r"></div>
          {weekDays.map((day) => (
            <div
              key={day.toISOString()}
              className="p-2 sm:p-4 text-center border-r last:border-r-0"
            >
              <div className="font-medium text-gray-600 text-xs sm:text-sm">
                <span className="hidden sm:inline">
                  {DAYS_OF_WEEK[day.getDay()]}
                </span>
                <span className="sm:hidden">
                  {DAYS_OF_WEEK[day.getDay()].slice(0, 1)}
                </span>
              </div>
              <div
                className={`text-sm sm:text-lg font-semibold ${
                  isToday(day)
                    ? "bg-blue-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mx-auto mt-1"
                    : "text-gray-900 mt-1"
                }`}
              >
                {day.getDate()}
              </div>
            </div>
          ))}
        </div>

        {/* Week grid */}
        <div className="max-h-[400px] sm:max-h-[600px] overflow-y-auto">
          {hours.map((hour) => (
            <div key={hour} className="grid grid-cols-8 border-b">
              <div className="p-1 sm:p-2 text-xs text-gray-500 border-r text-right">
                <span className="hidden sm:inline">
                  {hour === 0
                    ? "12 AM"
                    : hour === 12
                    ? "12 PM"
                    : hour > 12
                    ? `${hour - 12} PM`
                    : `${hour} AM`}
                </span>
                <span className="sm:hidden text-xs">
                  {hour === 0
                    ? "12a"
                    : hour === 12
                    ? "12p"
                    : hour > 12
                    ? `${hour - 12}p`
                    : `${hour}a`}
                </span>
              </div>
              {weekDays.map((day) => {
                const dayEvents = getEventsForDate(day).filter((event) => {
                  const eventHour = parseInt(event.startTime.split(":")[0]);
                  return eventHour === hour;
                });

                return (
                  <div
                    key={`${day.toISOString()}-${hour}`}
                    className="min-h-[40px] sm:min-h-[60px] p-0.5 sm:p-1 border-r last:border-r-0 hover:bg-gray-50 cursor-pointer"
                    onClick={() => onAddEvent?.(day)}
                  >
                    {dayEvents.map((event) => (
                      <Link
                        to={`/app/events/eventview/${event.id}`}
                        onClick={(e) => e.stopPropagation()}
                        key={event.id}
                        className="text-xs p-1 rounded text-white block w-full hover:cursor-pointer hover:opacity-80 transition-opacity mb-1"
                        style={{ backgroundColor: EVENT_COLORS[event.type] }}
                      >
                        <div className="font-medium truncate">
                          {event.title}
                        </div>
                        <div className="opacity-90 hidden sm:block text-xs">
                          {event.startTime} - {event.endTime}
                        </div>
                      </Link>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render year view
  const renderYearView = () => {
    const months = Array.from({ length: 12 }, (_, i) => {
      const monthDate = new Date(currentDate.getFullYear(), i, 1);
      return monthDate;
    });

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
        {months.map((month) => (
          <div
            key={month.getTime()}
            className="bg-white rounded-lg border p-2 sm:p-4"
          >
            <div className="text-center font-medium text-gray-900 mb-2 text-sm sm:text-base">
              {MONTHS[month.getMonth()]}
            </div>
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-xs">
              {DAYS_OF_WEEK.map((day) => (
                <div
                  key={day}
                  className="text-center text-gray-500 font-medium p-0.5 sm:p-1"
                >
                  {day[0]}
                </div>
              ))}

              {/* Mini month calendar */}
              {(() => {
                const firstDay = new Date(
                  month.getFullYear(),
                  month.getMonth(),
                  1
                );
                const startDate = new Date(firstDay);
                startDate.setDate(firstDay.getDate() - firstDay.getDay());

                const days = [];
                const current = new Date(startDate);

                for (let i = 0; i < 42; i++) {
                  if (
                    current.getMonth() === month.getMonth() ||
                    days.length < 7 ||
                    current.getDate() <= 7
                  ) {
                    days.push(new Date(current));
                  }
                  current.setDate(current.getDate() + 1);
                  if (days.length >= 35) break; // Limit to 5 weeks for compact view
                }

                return days.map((day) => {
                  const hasEvents = getEventsForDate(day).length > 0;
                  const isCurrentMonthDay = day.getMonth() === month.getMonth();
                  const isTodayDay = isToday(day);

                  return (
                    <div
                      key={day.getTime()}
                      className={`text-center p-0.5 sm:p-1 rounded cursor-pointer  text-xs ${
                        !isCurrentMonthDay ? "text-gray-300" : "text-gray-700"
                      } ${isTodayDay ? "bg-blue-500 text-white" : ""} ${
                        hasEvents ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        setCurrentDate(day);
                        setView("day");
                      }}
                    >
                      {day.getDate()}
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render day view
  const renderDayView = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const dayEvents = getEventsForDate(currentDate);

    return (
      <div className="bg-white rounded-lg border overflow-hidden">
        {/* Day header */}
        <div className="grid grid-cols-2 border-b">
          <div className="p-2 sm:p-4 border-r">
            <div className="text-xs sm:text-sm text-gray-500">
              {DAYS_OF_WEEK[currentDate.getDay()]}
            </div>
            <div
              className={`text-lg sm:text-2xl font-bold ${
                isToday(currentDate)
                  ? "bg-blue-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                  : "text-gray-900"
              }`}
            >
              {currentDate.getDate()}
            </div>
          </div>
          <div className="text-sm p-2 sm:p-4 text-gray-600">
            {dayEvents.length} event{dayEvents.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Day grid */}
        <div className="max-h-[500px] sm:max-h-[700px] overflow-y-auto">
          {hours.map((hour) => {
            const hourEvents = dayEvents.filter((event) => {
              const eventHour = parseInt(event.startTime.split(":")[0]);
              return eventHour === hour;
            });

            return (
              <div key={hour} className="grid grid-cols-8 border-b">
                <div className="col-span-1 p-2 sm:p-4 text-sm text-gray-500 border-r text-right">
                  <span className="hidden sm:inline">
                    {hour === 0
                      ? "12:00 AM"
                      : hour === 12
                      ? "12:00 PM"
                      : hour > 12
                      ? `${hour - 12}:00 PM`
                      : `${hour}:00 AM`}
                  </span>
                  <span className="sm:hidden text-xs">
                    {hour === 0
                      ? "12a"
                      : hour === 12
                      ? "12p"
                      : hour > 12
                      ? `${hour - 12}p`
                      : `${hour}a`}
                  </span>
                </div>
                <div
                  className="col-span-7 min-h-[60px] sm:min-h-[80px] p-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => onAddEvent?.(currentDate)}
                >
                  <div className="space-y-2">
                    {hourEvents.map((event) => (
                      <Link
                        to={`/app/events/eventview/${event.id}`}
                        onClick={(e) => e.stopPropagation()}
                        key={event.id}
                        className="block p-3 rounded-lg text-white hover:cursor-pointer hover:opacity-80 transition-opacity shadow-sm"
                        style={{ backgroundColor: EVENT_COLORS[event.type] }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-sm sm:text-base">
                            {event.title}
                          </div>
                          <div className="text-xs opacity-90">
                            {event.startTime} - {event.endTime}
                          </div>
                        </div>
                        {(event.room || event.professor) && (
                          <div className="text-xs opacity-90">
                            {event.room && <span>📍 {event.room}</span>}
                            {event.room && event.professor && <span> • </span>}
                            {event.professor && (
                              <span>👨‍🏫 {event.professor}</span>
                            )}
                          </div>
                        )}
                        {event.description && (
                          <div className="text-xs opacity-80 mt-1 line-clamp-2">
                            {event.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getViewTitle = () => {
    if (view === "day") {
      return `${
        MONTHS[currentDate.getMonth()]
      } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    } else if (view === "week") {
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      if (startOfWeek.getMonth() === endOfWeek.getMonth()) {
        return `${
          MONTHS[startOfWeek.getMonth()]
        } ${startOfWeek.getDate()}-${endOfWeek.getDate()}, ${startOfWeek.getFullYear()}`;
      } else {
        return `${MONTHS[startOfWeek.getMonth()]} ${startOfWeek.getDate()} - ${
          MONTHS[endOfWeek.getMonth()]
        } ${endOfWeek.getDate()}, ${startOfWeek.getFullYear()}`;
      }
    } else if (view === "year") {
      return currentDate.getFullYear().toString();
    } else {
      return `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    }
  };

  return (
    <div className="space-y-4">
      {/* Calendar controls */}
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {getViewTitle()}
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateDate("prev")}
              className="h-8 w-8 p-0 hover:cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateDate("next")}
              className="h-8 w-8 p-0 hover:cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToToday}
              className="ml-2 text-xs sm:text-sm hover:cursor-pointer"
            >
              Today
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* View selector */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {(["day", "week", "month", "year"] as CalendarView[]).map(
              (viewType) => (
                <Button
                  key={viewType}
                  variant={view === viewType ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setView(viewType)}
                  className={`capitalize flex-1 sm:flex-none text-xs sm:text-sm hover:cursor-pointer ${
                    view === viewType
                      ? "bg-white shadow-sm text-black hover:bg-white"
                      : "hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {viewType}
                </Button>
              )
            )}
          </div>

          <AddEventButton />
        </div>
      </div>

      {/* Calendar view */}
      <div className="bg-gray-50 p-2 sm:p-4 rounded-lg">
        {view === "day" && renderDayView()}
        {view === "week" && renderWeekView()}
        {view === "month" && renderMonthView()}
        {view === "year" && renderYearView()}
      </div>
    </div>
  );
};

export default FullCalendar;
