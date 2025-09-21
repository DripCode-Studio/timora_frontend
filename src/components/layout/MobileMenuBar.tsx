import {
  LayoutDashboard,
  CalendarDays,
  Plus,
  User,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/app", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/app/events", icon: CalendarDays, label: "Events" },
  { to: "/app/settings", icon: Settings, label: "Settings" },
  { to: "/app/profile", icon: User, label: "Profile" },
];

const MobileMenuBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full flex justify-center md:hidden pointer-events-none">
      <div className="relative w-full flex items-center justify-between bg-white/90 backdrop-blur px-2 py-1.5 m-0 shadow-xl pointer-events-auto border-t border-gray-200">
        <div className="flex w-full justify-between items-center">
          {navItems.slice(0, 2).map(({ to, icon: Icon, label }) => {
            const isActive =
              location.pathname === to ||
              (to === "/app" && location.pathname === "/app/");
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center justify-center flex-1 group"
                aria-label={label}
              >
                <Icon
                  className={cn(
                    "h-7 w-7 transition-colors",
                    isActive
                      ? "text-[#4CD964]"
                      : "text-black group-hover:text-[#4CD964]"
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] mt-0.5 transition-colors",
                    isActive
                      ? "text-[#4CD964]"
                      : "text-black group-hover:text-[#4CD964]"
                  )}
                >
                  {label}
                </span>
              </Link>
            );
          })}
          <div className="flex-none flex items-center justify-center mx-1">
            <Link
              to="/app/events/add"
              className="flex items-center justify-center rounded-full bg-[#4CD964] border-4 border-black shadow-xl w-12 h-12 hover:bg-[#3db853] transition-colors -mt-6"
              aria-label="Add"
              style={{ boxShadow: "0 4px 16px 0 rgba(0,0,0,0.15)" }}
            >
              <Plus className="h-6 w-6 text-black" />
            </Link>
          </div>
          {navItems.slice(2).map(({ to, icon: Icon, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center justify-center flex-1 group"
                aria-label={label}
              >
                <Icon
                  className={cn(
                    "h-7 w-7 transition-colors",
                    isActive
                      ? "text-[#4CD964]"
                      : "text-black group-hover:text-[#4CD964]"
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] mt-0.5 transition-colors",
                    isActive
                      ? "text-[#4CD964]"
                      : "text-black group-hover:text-[#4CD964]"
                  )}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileMenuBar;
