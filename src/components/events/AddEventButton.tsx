import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";

function AddEventButton() {
  return (
    <Link to="/app/events/add" className="">
      <Button
        variant="default"
        className="w-full md:w-fit hover:cursor-pointer bg-black my-2 hover:bg-gray-800 text-[#4CD964] font-bold text-xl flex items-center gap-2"
      >
        <SquarePlus className="h-5 w-5 " strokeWidth="3" />
        Add Event
      </Button>
    </Link>
  );
}

export default AddEventButton;
