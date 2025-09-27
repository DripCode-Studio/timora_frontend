import { useState } from "react";
import {
  User,
  Camera,
  Settings,
  Bell,
  Palette,
  Globe,
  Save,
  ChevronDown,
  Monitor,
  Sun,
  Moon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@university.edu",
    university: "Stanford University",
    timezone: "Pacific Time (PT)",
  });
  const [theme, setTheme] = useState("light");
  const [weekStart, setWeekStart] = useState("Sunday");
  const [defaultView, setDefaultView] = useState("Week");

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "integrations", label: "Integrations", icon: Settings },
    { id: "preferences", label: "Preferences", icon: Palette },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "billing", label: "Billing", icon: Globe },
  ];

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Profile Information
        </h2>
        <Button className="bg-[#4CD964] hover:bg-[#4CD964]/90 text-black font-medium">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      {/* Profile Picture */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/api/placeholder/80/80" alt="Profile" />
                <AvatarFallback className="bg-[#4CD964] text-black text-xl font-semibold">
                  {profileData.firstName[0]}
                  {profileData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <button className="absolute -bottom-1 -right-1 bg-white border-2 border-gray-200 rounded-full p-1.5 hover:bg-gray-50 transition-colors">
                <Camera className="h-3 w-3 text-gray-600" />
              </button>
            </div>
            <div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#4CD964] border-[#4CD964] hover:bg-[#4CD964]/10"
                >
                  Change Photo
                </Button>
                <Button variant="outline" size="sm" className="text-gray-600">
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Form */}
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                First Name
              </label>
              <Input
                value={profileData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Last Name
              </label>
              <Input
                value={profileData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="border-gray-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="border-gray-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                University
              </label>
              <Input
                value={profileData.university}
                onChange={(e) =>
                  handleInputChange("university", e.target.value)
                }
                className="border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Time Zone
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {profileData.timezone}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem
                    onClick={() =>
                      handleInputChange("timezone", "Pacific Time (PT)")
                    }
                  >
                    Pacific Time (PT)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      handleInputChange("timezone", "Eastern Time (ET)")
                    }
                  >
                    Eastern Time (ET)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      handleInputChange("timezone", "Central Time (CT)")
                    }
                  >
                    Central Time (CT)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderIntegrationsSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Integrations</h2>

      <div className="space-y-4">
        {/* Google Calendar */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Google Calendar
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sync your events and schedules with Google Calendar
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Configure
                </Button>
                <Button variant="outline" size="sm" className="text-red-600">
                  Disconnect
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outlook Calendar */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Outlook Calendar
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sync with Microsoft Outlook calendar service
                  </p>
                </div>
              </div>
              <Button className="bg-[#4CD964] hover:bg-[#4CD964]/90 text-black">
                Connect
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPreferencesSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Preferences</h2>

      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Theme Selection */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Theme</h3>
            <p className="text-sm text-gray-600">Choose your preferred theme</p>
            <div className="flex gap-3">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("light")}
                className={
                  theme === "light"
                    ? "bg-[#4CD964] text-black hover:bg-[#4CD964]/90"
                    : ""
                }
              >
                <Sun className="h-4 w-4 mr-2" />
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("dark")}
                className={
                  theme === "dark"
                    ? "bg-[#4CD964] text-black hover:bg-[#4CD964]/90"
                    : ""
                }
              >
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </Button>
              <Button
                variant={theme === "auto" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("auto")}
                className={
                  theme === "auto"
                    ? "bg-[#4CD964] text-black hover:bg-[#4CD964]/90"
                    : ""
                }
              >
                <Monitor className="h-4 w-4 mr-2" />
                Auto
              </Button>
            </div>
          </div>

          {/* Week Start */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Week starts on</h3>
            <p className="text-sm text-gray-600">First day of the week</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-48 justify-between">
                  {weekStart}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setWeekStart("Sunday")}>
                  Sunday
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setWeekStart("Monday")}>
                  Monday
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Default View */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Default view</h3>
            <p className="text-sm text-gray-600">Calendar default view</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-48 justify-between">
                  {defaultView}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setDefaultView("Week")}>
                  Week
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDefaultView("Month")}>
                  Month
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDefaultView("Year")}>
                  Year
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return renderProfileSection();
      case "integrations":
        return renderIntegrationsSection();
      case "preferences":
        return renderPreferencesSection();
      case "notifications":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Notification settings coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        );
      case "billing":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Billing</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Billing information coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return renderProfileSection();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Settings
        </h1>
        <p className="text-gray-700">
          Manage your account preferences and integrations
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:w-64 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-[#4CD964] text-black font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex-1">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Profile;
