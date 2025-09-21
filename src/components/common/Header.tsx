import React from "react";
import { Bell, Calendar, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  return (
    <header className=" text-white p-4 flex justify-around md:justify-end bg-gray-800">
      <div className="flex items-center justify-between md:justify-end w-full max-w-4xl">
        <a
          href="/app"
          className="flex md:hidden items-center gap-2 font-semibold"
        >
          <Calendar className="h-6 w-6" />
          <span className="text-xl">Timora</span>
        </a>
        <span className="relative mr-3">
          <Bell className="hover:cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            10
          </span>
        </span>
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
