import {
  LayoutDashboard,
  CalendarDays,
  Calendar,
  User,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/app",
    icon: LayoutDashboard,
  },
  {
    title: "Events",
    url: "/app/events",
    icon: CalendarDays,
  },
  {
    title: "Settings",
    url: "/app/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    url: "/app/profile",
    icon: User,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="hidden md:block">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <a href="/app" className="flex items-center gap-2 font-semibold">
              <Calendar className="h-6 w-6" />
              <span className="text-xl">Timora</span>
            </a>
          </SidebarGroupLabel>
          <SidebarMenu className="mt-4">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="w-full hover:cursor-pointer"
                >
                  <a href={item.url}>
                    <item.icon className="w-6 h-6" />
                    <span className="text-lg">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
export default AppSidebar;
