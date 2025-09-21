import {
  LayoutDashboard,
  CalendarDays,
  Plus,
  User,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { to: "/app", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/app/events", icon: CalendarDays, label: "Events" },
  { to: "/app/settings", icon: Settings, label: "Settings" },
  { to: "/app/profile", icon: User, label: "Profile" },
];

const MobileMenuBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full flex justify-center md:hidden pointer-events-none">
      <div className="relative w-full flex items-center justify-between bg-white/90 backdrop-blur px-2 py-1.5 m-0 shadow-xl pointer-events-auto border-t border-gray-200">
        <div className="flex w-full justify-between items-center">
          {navItems.slice(0, 2).map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center justify-center flex-1 group"
              aria-label={label}
            >
              <Icon className="h-7 w-7 text-gray-700 group-hover:text-blue-600 transition-colors" />
              <span className="text-[10px] text-gray-500 mt-0.5">{label}</span>
            </Link>
          ))}
          <div className="flex-none flex items-center justify-center mx-1">
            <Link
              to="/app/events/add"
              className="flex items-center justify-center rounded-full bg-blue-600 border-4 border-white shadow-xl w-12 h-12 hover:bg-blue-700 transition-colors -mt-6"
              aria-label="Add"
              style={{ boxShadow: "0 4px 16px 0 rgba(0,0,0,0.15)" }}
            >
              <Plus className="h-6 w-6 text-white" />
            </Link>
          </div>
          {navItems.slice(2).map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center justify-center flex-1 group"
              aria-label={label}
            >
              <Icon className="h-7 w-7 text-gray-700 group-hover:text-blue-600 transition-colors" />
              <span className="text-[10px] text-gray-500 mt-0.5">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileMenuBar;
