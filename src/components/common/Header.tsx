import React from "react";
import { Bell, Calendar, ChevronDown } from "lucide-react";
import type { Notification } from "@/types/profile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const notifications: Notification[] = [
  {
    id: "1",
    title: "Devoir no2",
    dueDate: "20 septembre 2025, 21:00",
    timeLeft: "2 jours 2 heures",
    isUnread: true,
  },
  {
    id: "2",
    title: "Devoir no1",
    dueDate: "11 septembre 2025, 21:00",
    timeLeft: "10 jours 12 heures",
    isUnread: true,
  },
  {
    id: "3",
    title: "Devoir no1",
    dueDate: "11 septembre 2025, 09:00",
    timeLeft: "11 jours 14 heures",
    isUnread: false,
  },
];

function Header() {
  return (
    <header className=" text-white p-4 flex justify-around md:justify-end bg-black">
      <div className="flex items-center justify-between md:justify-end w-full max-w-4xl">
        <a
          href="/app"
          className="flex md:hidden items-center gap-2 font-semibold"
        >
          <Calendar className="h-6 w-6 text-[#4CD964]" />
          <span className="text-xl">Timora</span>
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger className="relative mr-3">
            <Bell className="hover:cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {notifications.filter((n) => n.isUnread).length}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 bg-white" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg">Notifications</h3>
                <p className="text-xs text-gray-500">
                  You have {notifications.filter((n) => n.isUnread).length}{" "}
                  unread notifications
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notification, index) => (
                <DropdownMenuItem
                  key={index}
                  className="flex flex-col items-start gap-1 p-3 hover:cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        notification.isUnread ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                    <span className="font-medium">{notification.title}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    À rendre le {notification.dueDate}
                  </div>
                  <div className="text-xs text-gray-500">
                    Il y a {notification.timeLeft}
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            {/* <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-sm text-blue-600 hover:text-blue-700 cursor-pointer p-2">
              Tout afficher
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
        <Avatar className="hidden md:inline-flex ml-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <DropdownMenu>
          <DropdownMenuTrigger className="hidden md:flex items-center ml-2 hover:cursor-pointer">
            <span className="ml-2">Carlos Nunez</span>
            <ChevronDown className="ml-2" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:cursor-pointer hover:bg-gray-300">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Team
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Subscription
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
