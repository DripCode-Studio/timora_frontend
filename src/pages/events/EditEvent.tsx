import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Save,
  Calendar,
  Clock,
  MapPin,
  Plus,
  X,
  Bell,
  Repeat,
  Users,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate, useParams } from "react-router-dom";

interface EventFormData {
  title: string;
  type: "lecture" | "study" | "personal" | "assignment";
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  priority: "low" | "medium" | "high";
  calendar: string;
  reminder: string[];
  repeat: string;
}

interface StudyPartner {
  id: string;
  name: string;
  email: string;
}

interface ChecklistItem {
  id: string;
  text: string;
  status: boolean;
}

function EditEvent() {
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();

  // Mock data for the event being edited - in a real app, this would come from an API
  const mockEventData: EventFormData = {
    title: "Computer Science Midterm Exam",
    type: "assignment",
    date: "2025-03-15",
    startTime: "14:00",
    endTime: "16:00",
    location: "Room 204, Science Building",
    description:
      "Comprehensive midterm examination covering chapters 1-5 including data structures, algorithms, and object-oriented programming concepts. Bring calculators and writing materials. Review sessions available in the library study rooms.",
    priority: "high",
    calendar: "Academic Schedule",
    reminder: ["1 day before", "1 hour before"],
    repeat: "Does not repeat",
  };

  const mockStudyPartners: StudyPartner[] = [
    { id: "1", name: "Sarah Chen", email: "sarah.chen@university.edu" },
    { id: "2", name: "Mike Rodriguez", email: "mike.rodriguez@university.edu" },
  ];

  const mockChecklist: ChecklistItem[] = [
    { id: "1", text: "Review Chapter 1-4 notes", status: true },
    { id: "2", text: "Complete practice problems", status: true },
    { id: "3", text: "Study algorithms complexity", status: false },
    { id: "4", text: "Prepare calculator and materials", status: false },
  ];

  const [formData, setFormData] = useState<EventFormData>(mockEventData);
  const [studyPartners, setStudyPartners] =
    useState<StudyPartner[]>(mockStudyPartners);
  const [checklist, setChecklist] = useState<ChecklistItem[]>(mockChecklist);
  const [newPartnerEmail, setNewPartnerEmail] = useState("");
  const [newChecklistItem, setNewChecklistItem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const eventTypes = [
    { value: "lecture", label: "Lecture", color: "#3B82F6" },
    { value: "study", label: "Study", color: "#22C55E" },
    { value: "personal", label: "Personal", color: "#4CD964" },
    { value: "assignment", label: "Assignment", color: "#EF4444" },
  ];

  const priorities = [
    { value: "low", label: "Low", color: "#6B7280" },
    { value: "medium", label: "Medium", color: "#F59E0B" },
    { value: "high", label: "High", color: "#EF4444" },
  ];

  const reminderOptions = [
    "At time of event",
    "15 minutes before",
    "30 minutes before",
    "1 hour before",
    "1 day before",
    "1 week before",
  ];

  const repeatOptions = [
    "Does not repeat",
    "Daily",
    "Weekly",
    "Monthly",
    "Yearly",
  ];

  useEffect(() => {
    // In a real app, you would fetch the event data based on eventId
    // For now, we're using mock data
    if (eventId) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setFormData(mockEventData);
        setStudyPartners(mockStudyPartners);
        setChecklist(mockChecklist);
        setIsLoading(false);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId]);

  const handleInputChange = (
    field: keyof EventFormData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addStudyPartner = () => {
    if (newPartnerEmail.trim()) {
      const newPartner: StudyPartner = {
        id: Date.now().toString(),
        name: newPartnerEmail.split("@")[0],
        email: newPartnerEmail,
      };
      setStudyPartners((prev) => [...prev, newPartner]);
      setNewPartnerEmail("");
    }
  };

  const removeStudyPartner = (id: string) => {
    setStudyPartners((prev) => prev.filter((partner) => partner.id !== id));
  };

  const addChecklistItem = () => {
    if (newChecklistItem.trim()) {
      const newItem: ChecklistItem = {
        id: Date.now().toString(),
        text: newChecklistItem,
        status: false,
      };
      setChecklist((prev) => [...prev, newItem]);
      setNewChecklistItem("");
    }
  };

  const removeChecklistItem = (id: string) => {
    setChecklist((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const toggleReminderOption = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      reminder: prev.reminder.includes(option)
        ? prev.reminder.filter((r) => r !== option)
        : [...prev.reminder, option],
    }));
  };

  const handleSave = () => {
    setIsLoading(true);
    // Here you would typically save the updated event to your backend
    console.log("Updating event:", { ...formData, studyPartners, checklist });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/events/${eventId}`);
    }, 1000);
  };

  const selectedEventType = eventTypes.find(
    (type) => type.value === formData.type
  );
  const selectedPriority = priorities.find(
    (priority) => priority.value === formData.priority
  );

  if (isLoading && !formData.title) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4CD964] mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading event...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/events/${eventId}`)}
            className="text-gray-600 hover:text-gray-900 hover:cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Event
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => navigate(`/events/${eventId}`)}
            className="hover:cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-[#4CD964] hover:bg-[#4CD964]/90 text-black font-medium hover:cursor-pointer"
          >
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Edit Event
        </h1>
        <p className="text-gray-600 mt-1">Modify your event details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Event Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Event Title */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Event Title *
                </label>
                <Input
                  placeholder="Enter event title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="text-lg font-medium"
                />
              </div>

              {/* Event Type and Priority */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Event Type
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: selectedEventType?.color,
                            }}
                          />
                          {selectedEventType?.label}
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {eventTypes.map((type) => (
                        <DropdownMenuItem
                          key={type.value}
                          onClick={() => handleInputChange("type", type.value)}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: type.color }}
                            />
                            {type.label}
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: selectedPriority?.color }}
                          />
                          {selectedPriority?.label}
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {priorities.map((priority) => (
                        <DropdownMenuItem
                          key={priority.value}
                          onClick={() =>
                            handleInputChange("priority", priority.value)
                          }
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: priority.color }}
                            />
                            {priority.label}
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Start Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="time"
                      value={formData.startTime}
                      onChange={(e) =>
                        handleInputChange("startTime", e.target.value)
                      }
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    End Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="time"
                      value={formData.endTime}
                      onChange={(e) =>
                        handleInputChange("endTime", e.target.value)
                      }
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Add location"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  placeholder="Add event description..."
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#4CD964] focus:border-transparent"
                />
              </div>
            </CardContent>
          </Card>

          {/* Preparation Checklist */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Preparation Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add checklist item..."
                  value={newChecklistItem}
                  onChange={(e) => setNewChecklistItem(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addChecklistItem()}
                  className="flex-1"
                />
                <Button
                  onClick={addChecklistItem}
                  size="sm"
                  className="bg-[#4CD964] hover:bg-[#4CD964]/90 text-black hover:cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {checklist.length > 0 && (
                <div className="space-y-2">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <label className="flex items-center gap-3 flex-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={item.status}
                          onChange={() => toggleChecklistItem(item.id)}
                          className="h-4 w-4 hover:cursor-pointer text-[#4CD964] border-gray-300 rounded focus:ring-[#4CD964]"
                        />
                        <span
                          className={`text-sm ${
                            item.status
                              ? "line-through text-gray-500"
                              : "text-gray-900"
                          }`}
                        >
                          {item.text}
                        </span>
                      </label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeChecklistItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 hover:cursor-pointer"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Study Partners */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5" />
                Study Partners
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter email address..."
                  value={newPartnerEmail}
                  onChange={(e) => setNewPartnerEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addStudyPartner()}
                  className="flex-1"
                />
                <Button
                  onClick={addStudyPartner}
                  size="sm"
                  className="bg-[#4CD964] hover:bg-[#4CD964]/90 text-black hover:cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {studyPartners.length > 0 && (
                <div className="space-y-2">
                  {studyPartners.map((partner) => (
                    <div
                      key={partner.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-[#4CD964] text-black text-sm">
                            {partner.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900">
                            {partner.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {partner.email}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeStudyPartner(partner.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 hover:cursor-pointer"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Settings Sidebar */}
        <div className="space-y-6">
          {/* Calendar Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Calendar
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {formData.calendar}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem
                      onClick={() =>
                        handleInputChange("calendar", "Academic Schedule")
                      }
                    >
                      Academic Schedule
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleInputChange("calendar", "Personal")}
                    >
                      Personal
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleInputChange("calendar", "Work")}
                    >
                      Work
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Repeat className="h-4 w-4" />
                  Repeat
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {formData.repeat}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {repeatOptions.map((option) => (
                      <DropdownMenuItem
                        key={option}
                        onClick={() => handleInputChange("repeat", option)}
                      >
                        {option}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          {/* Reminders */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Reminders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {reminderOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.reminder.includes(option)}
                    onChange={() => toggleReminderOption(option)}
                    className="h-4 w-4 text-[#4CD964] border-gray-300 rounded focus:ring-[#4CD964] hover:cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EditEvent;
