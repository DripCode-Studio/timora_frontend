import { Calendar as CalendarIcon, Clock3, Plus } from "lucide-react";
import Calendar from "@/components/ui/Calendar";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Dashboard() {
  const dashboardData = [
    {
      title: "Today's Schedule",
      icon: <CalendarIcon className="h-6 w-6" />,
      number: 5,
      description: "Events scheduled",
    },
    {
      title: "This Week",
      number: 23,
      icon: <Clock3 className="h-6 w-6" />,
      description: "Total events",
    },
  ];
  return (
    <section className="space-y-3">
      <h1 className=" text-2xl md:text-3xl font-bold">Welcome, Carlos Nunez</h1>
      <p className="text-gray-700">Here's what's coming up for you today.</p>
      <div className="mt-2">
        <Calendar />
      </div>
      <Button
        variant="default"
        className="w-full md:w-fit hover:cursor-pointer py-1"
      >
        <Link to="events/add" className="flex items-center gap-2 ">
          {" "}
          <Plus /> Add Event
        </Link>
      </Button>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
        {dashboardData.map((item, index) => (
          <Card key={index} className=" p-4 bg-gray-300">
            <CardHeader className="flex items-center justify-between mb-4 px-0">
              <CardTitle className="text-lg  font-semibold">
                {item.title}
              </CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent className="text-left p-0">
              <div>
                <p className="text-4xl font-bold">{item.number}</p>
                <p className="text-gray-500 mt-1">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card className="p-4"></Card>
        <Card className="p-0 border-0">
          <Card></Card>
          <Card></Card>
        </Card>
      </div>
    </section>
  );
}

export default Dashboard;
