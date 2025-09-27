import { useState } from "react";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Calendar,
  Clock,
  MapPin,
  Copy,
  Share,
  Download,
  Bell,
  Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface StudyPartner {
  id: string;
  name: string;
  avatar?: string;
  role: string;
}

interface RelatedEvent {
  id: string;
  title: string;
  date: string;
  time: string;
}

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

function EventView() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: "1", text: "Review Chapter 1-4 notes", completed: true },
    { id: "2", text: "Complete practice problems", completed: true },
    { id: "3", text: "Study algorithms complexity", completed: false },
    { id: "4", text: "Prepare calculator and materials", completed: false },
  ]);

  const studyPartners: StudyPartner[] = [
    {
      id: "1",
      name: "Sarah Chen",
      role: "Study partner",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: "2",
      name: "Mike Rodriguez",
      role: "Study partner",
      avatar: "/api/placeholder/32/32",
    },
  ];

  const relatedEvents: RelatedEvent[] = [
    { id: "1", title: "CS Study Group", date: "March 13", time: "6:30 PM" },
    {
      id: "2",
      title: "Office Hours - Prof. Johnson",
      date: "March 14",
      time: "3:00 PM",
    },
  ];

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          to="/app/events"
          className="text-gray-600 flex items-center hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Calendar
        </Link>
      </div>

      {/* Event Title and Actions */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Computer Science Midterm Exam
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>March 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>2:00 PM - 4:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Room 204, Science Building</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Exam
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              High Priority
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Comprehensive midterm examination covering chapters 1-5
                including data structures, algorithms, and object-oriented
                programming concepts. Bring calculators and writing materials.
                Review sessions available in the library study rooms.
              </p>
            </CardContent>
          </Card>

          {/* Preparation Checklist */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Preparation Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {checklist.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleChecklistItem(item.id)}
                    className="h-4 w-4 text-[#4CD964] border-gray-300 rounded focus:ring-[#4CD964]"
                  />
                  <span
                    className={`${
                      item.completed
                        ? "line-through text-gray-500"
                        : "text-gray-900"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Related Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {relatedEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div>
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                  </div>
                  <div className="text-sm text-gray-600">
                    {event.date}, {event.time}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Study Partners */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                Study Partners
                <Button
                  size="sm"
                  variant="outline"
                  className="text-[#4CD964] border-[#4CD964] hover:bg-[#4CD964]/10"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add study partner
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {studyPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={partner.avatar} alt={partner.name} />
                    <AvatarFallback className="bg-[#4CD964] text-black text-sm">
                      {partner.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-900">
                      {partner.name}
                    </div>
                    <div className="text-sm text-gray-600">{partner.role}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Event Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Duration
                </div>
                <div className="text-sm text-gray-900">2 hours</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Calendar
                </div>
                <div className="text-sm text-gray-900">Academic Schedule</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Repeat
                </div>
                <div className="text-sm text-gray-900">Does not repeat</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Reminder
                </div>
                <div className="text-sm text-gray-900">
                  1 day before, 1 hour before
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Created
                </div>
                <div className="text-sm text-gray-900">March 1, 2025</div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Copy className="h-4 w-4 mr-2" />
                Duplicate Event
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share className="h-4 w-4 mr-2" />
                Share Event
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Export to Calendar
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Edit Reminders
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EventView;
