import { useState } from "react";
import { Filter, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddCalendarForm from "./AddCalendarForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CalendarEvent } from "@/components/events/FullCalendar";

interface CalendarFiltersProps {
  events: CalendarEvent[];
  onAddEvent?: () => void;
}

interface CalendarFilter {
  id: string;
  name: string;
  color: string;
  enabled: boolean;
  type?: "lecture" | "study" | "personal" | "assignment";
}

const CalendarFilters: React.FC<CalendarFiltersProps> = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [calendarFilters, setCalendarFilters] = useState<CalendarFilter[]>([
    {
      id: "personal",
      name: "Personal",
      color: "#4CD964",
      enabled: true,
      type: "personal",
    },
    {
      id: "study",
      name: "Study",
      color: "#22C55E",
      enabled: true,
      type: "study",
    },
    {
      id: "exams",
      name: "Exams",
      color: "#EF4444",
      enabled: true,
      type: "assignment",
    },
    {
      id: "projects",
      name: "Projects",
      color: "#3B82F6",
      enabled: true,
      type: "lecture",
    },
  ]);

  const toggleFilter = (filterId: string) => {
    setCalendarFilters((prev) =>
      prev.map((filter) =>
        filter.id === filterId
          ? { ...filter, enabled: !filter.enabled }
          : filter
      )
    );
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Calendars Filter */}
      <Card className="h-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center justify-between">
            <span>Calendars</span>
            <Filter className="h-4 w-4 text-gray-400" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-3">
            {calendarFilters.map((filter) => (
              <div
                key={filter.id}
                className={`flex items-center gap-3 cursor-pointer p-2 rounded transition-colors ${
                  filter.enabled
                    ? "bg-gray-50 hover:bg-gray-100"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => toggleFilter(filter.id)}
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                      filter.enabled
                        ? "border-transparent"
                        : "border-gray-300 bg-white"
                    }`}
                    style={{
                      backgroundColor: filter.enabled
                        ? filter.color
                        : "transparent",
                    }}
                  >
                    {filter.enabled && (
                      <svg
                        className="w-2 h-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium truncate ${
                      filter.enabled ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {filter.name}
                  </span>
                </div>
                <div
                  className={`text-xs ${
                    filter.enabled ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {events.filter((event) => event.type === filter.type).length}
                </div>
              </div>
            ))}
          </div>

          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full text-center justify-center hover:cursor-pointer rounded-lg border border-[#4CD964] text-[#4CD964] hover:text-[#4CD964] hover:bg-[#4CD964]/10 text-lg"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Calendar
                </Button>
              </DialogTrigger>
              <AddCalendarForm />
            </form>
          </Dialog>

          {/* Event Statistics */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-900 mb-3">
              This Week
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Events</span>
                <span className="font-semibold text-gray-900 text-sm">
                  {events.length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Completed</span>
                <span className="font-semibold text-green-600 text-sm">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pending</span>
                <span className="font-semibold text-orange-600 text-sm">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Overdue</span>
                <span className="font-semibold text-red-600 text-sm">1</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarFilters;
