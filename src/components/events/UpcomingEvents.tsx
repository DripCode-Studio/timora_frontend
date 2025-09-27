import { Clock, MapPin, User, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CalendarEvent } from "@/components/events/FullCalendar";
import { EVENT_COLORS } from "@/types/events";
import { Link } from "react-router-dom";

interface UpcomingEventsProps {
  events: CalendarEvent[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  // Get upcoming events (next 7 days)
  const getUpcomingEvents = () => {
    const now = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(now.getDate() + 7);

    return events
      .filter((event) => {
        const eventDate = new Date(event.startDate);
        return eventDate >= now && eventDate <= nextWeek;
      })
      .sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      )
      .slice(0, 10); // Show max 10 upcoming events
  };

  const upcomingEvents = getUpcomingEvents();

  const formatEventDate = (date: Date) => {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);

    if (date.toDateString() === now.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
      };
      return date.toLocaleDateString("en-US", options);
    }
  };

  const formatEventTime = (startTime: string, endTime: string) => {
    return `${startTime} - ${endTime}`;
  };

  return (
    <Card className="h-full ">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        {upcomingEvents.length === 0 ? (
          <p className="text-gray-500 text-sm">No upcoming events</p>
        ) : (
          <div className=" h-fit max-h-150 md:max-h-200 overflow-y-auto">
            {upcomingEvents.map((event) => (
              <Link
                to={`/app/events/eventview/${event.id}`}
                key={event.id}
                className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div
                  className="w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: EVENT_COLORS[event.type] }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">
                    {event.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 text-gray-400 flex-shrink-0" />
                      <span className="truncate">
                        {formatEventDate(new Date(event.startDate))}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-gray-400 flex-shrink-0" />
                      <span className="truncate">
                        {formatEventTime(event.startTime, event.endTime)}
                      </span>
                    </div>
                    {event.room && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{event.room}</span>
                      </div>
                    )}
                    {event.professor && (
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{event.professor}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
