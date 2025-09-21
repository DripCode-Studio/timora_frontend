import {
  LayoutDashboard,
  CalendarDays,
  Calendar,
  User,
  Settings,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

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
  const location = useLocation();

  return (
    <Sidebar className="hidden md:flex h-screen w-64 bg-white border-r shadow-sm">
      <SidebarContent className="flex flex-col flex-1 pt-5 pb-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-6">
            <Link to="/app" className="flex items-center gap-3 py-2">
              <Calendar className="h-8 w-8 text-[#4CD964]" />
              <span className="text-2xl font-semibold text-gray-900">
                Timora
              </span>
            </Link>
          </SidebarGroupLabel>
          <SidebarMenu className="flex-1 mt-8">
            {items.map((item) => {
              const isActive =
                location.pathname === item.url ||
                (item.url === "/app" && location.pathname === "/app/");

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="w-full hover:cursor-pointer"
                  >
                    <Link
                      to={item.url}
                      className={cn(
                        "flex items-center gap-4 px-6 py-3.5 transition-all",
                        "text-black hover:text-[#4CD964] hover:bg-gray-50 group",
                        isActive && "text-[#4CD964] bg-[#4CD964]/5 font-medium"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "w-6 h-6 flex-shrink-0 transition-colors",
                          isActive
                            ? "text-[#4CD964]"
                            : "text-black group-hover:text-[#4CD964]"
                        )}
                      />
                      <span className="text-[15px]">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
export default AppSidebar;
