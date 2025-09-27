import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="flex items-center gap-2 mb-8 font-semibold text-2xl">
        <Calendar className="h-7 w-7 text-primary" />
        <span>Timora</span>
      </div>
      <h1 className="text-5xl font-bold tracking-tight mb-4 text-center">
        404
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-md">
        Oops! The page you are looking for does not exist.
        <br />
        Let's get you back to where you belong.
      </p>
      <Button asChild={true} size="lg" className="hover:cursor-pointer">
        <Link to="/">
          <ArrowRight className="mr-2 h-5 w-5" /> Go to Home
        </Link>
      </Button>
    </div>
  );
}

export default NotFound;
