import {
  Calendar as CalendarIcon,
  Clock3,
  AlertTriangle,
  Timer,
  FileText,
  MapPin,
  User,
} from "lucide-react";
import Calendar from "@/components/ui/Calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { type Deadline, type CategoryData } from "@/types/events";
import AddEventButton from "@/components/events/AddEventButton";
import sampleEvents from "@/data/sampleEvents";
import type { CalendarEvent } from "@/components/events/FullCalendar";

const EVENT_COLORS = {
  lecture: "#3B82F6",
  study: "#22C55E",
  assignment: "#EF4444",
  personal: "#F59E0B",
} as const;

function Dashboard() {
  const calculateCategoryData = (): CategoryData[] => {
    const categoryCounts = todayEvents.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const total = todayEvents.length;
    const categories = Object.entries(categoryCounts).map(([type, count]) => ({
      name: type.charAt(0).toUpperCase() + type.slice(1) + "s",
      value: Math.round((count / total) * 100),
      color: EVENT_COLORS[type as keyof typeof EVENT_COLORS],
    }));

    return categories;
  };
  const todayEvents: CalendarEvent[] = sampleEvents.filter((event) => {
    const today = new Date(); // Dynamic current date
    return (
      event.startDate.getFullYear() === today.getFullYear() &&
      event.startDate.getMonth() === today.getMonth() &&
      event.startDate.getDate() === today.getDate()
    );
  });

  const getUpcomingDeadlines = (): Deadline[] => {
    const today = new Date(); // Dynamic current date
    const upcomingAssignments = sampleEvents
      .filter(
        (event) => event.type === "assignment" && event.startDate >= today
      )
      .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
      .slice(0, 3); // Get the next 3 deadlines

    return upcomingAssignments.map((event) => {
      const daysDiff = Math.ceil(
        (event.startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );

      let status: "due-today" | "due-soon" | "upcoming";
      let dueDate: string;

      if (daysDiff === 0) {
        status = "due-today";
        dueDate = `Due today, ${event.startTime}`;
      } else if (daysDiff <= 3) {
        status = "due-soon";
        dueDate = `Due in ${daysDiff} day${daysDiff > 1 ? "s" : ""}`;
      } else {
        status = "upcoming";
        dueDate = `Due in ${daysDiff} days`;
      }

      return {
        id: event.id,
        title: event.title,
        status,
        dueDate,
      };
    });
  };

  const upcomingDeadlines: Deadline[] = getUpcomingDeadlines();

  const getThisWeekEvents = () => {
    const today = new Date(); // Dynamic current date
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Start of this week (Sunday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // End of this week (Saturday)

    return sampleEvents.filter((event) => {
      return event.startDate >= startOfWeek && event.startDate <= endOfWeek;
    });
  };

  const thisWeekEvents = getThisWeekEvents();

  const dashboardData = [
    {
      title: "Today's Schedule",
      icon: <CalendarIcon className="h-6 w-6" />,
      number: todayEvents.length,
      description: "Events scheduled",
    },
    {
      title: "This Week",
      number: thisWeekEvents.length,
      icon: <Clock3 className="h-6 w-6" />,
      description: "Total events",
    },
  ];
  return (
    <section className="space-y-3">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className=" text-2xl md:text-3xl font-bold">
            Welcome, Carlos Nunez
          </h1>
          <p className="text-gray-700">
            Here's what's coming up for you today.
          </p>
        </div>
        <div className="">
          <Calendar />
        </div>
        <AddEventButton />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {dashboardData.map((item, index) => (
          <Card
            key={index}
            className="relative overflow-hidden py-3 group transition-all duration-200 bg-[#4CD964] rounded-xl shadow-sm"
          >
            <CardHeader className="flex items-start p-3">
              <div className="flex-1">
                <CardTitle className="text-2xl font-semibold text-black/80 ">
                  {item.title}
                </CardTitle>
                <p className="text-5xl font-bold text-black my-1">
                  {item.number}
                </p>
                <p className="text-lg text-black/70">{item.description}</p>
              </div>
              <div className="p-2 rounded-lg bg-black/10">{item.icon}</div>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Today's Events */}
        <Card className="p-4 bg-gray-50/80 rounded-xl">
          <CardHeader className="px-0">
            <CardTitle className="text-xl font-semibold text-gray-800">
              Today's Events
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="divide-y divide-gray-200">
              {todayEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <div
                    style={{ backgroundColor: EVENT_COLORS[event.type] }}
                    className="w-1 rounded"
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">
                        {event.title}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-gray-500" />
                        <span>
                          {event.startTime} - {event.endTime}
                        </span>
                        {event.room && (
                          <>
                            <MapPin className="h-4 w-4 ml-2 text-gray-500" />
                            <span>{event.room}</span>
                          </>
                        )}
                      </div>
                      {event.professor && (
                        <div className="flex items-center gap-2 mt-1">
                          <User className="h-4 w-4 text-gray-500" />
                          <span>{event.professor}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {/* Upcoming Deadlines */}
          <Card className="p-4">
            <CardHeader className="px-0">
              <CardTitle className="text-xl font-semibold">
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline) => (
                  <div key={deadline.id} className="flex items-center gap-3">
                    {deadline.status === "due-today" && (
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    )}
                    {deadline.status === "due-soon" && (
                      <Timer className="h-5 w-5 text-yellow-500" />
                    )}
                    {deadline.status === "upcoming" && (
                      <FileText className="h-5 w-5 text-gray-500" />
                    )}
                    <div>
                      <div className="font-semibold">{deadline.title}</div>
                      <div
                        className={`text-sm ${
                          deadline.status === "due-today"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {deadline.dueDate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Events by Category */}
          <Card className="p-4">
            <CardHeader className="px-0">
              <CardTitle className="text-xl font-semibold">
                Events by Category
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full md:w-1/2 h-[200px] min-h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={calculateCategoryData()}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        dataKey="value"
                      >
                        {calculateCategoryData().map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="grid grid-cols-1 gap-3">
                    {calculateCategoryData().map((category, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: category.color }}
                        ></div>
                        <span className="text-sm">
                          {category.name} ({category.value}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
