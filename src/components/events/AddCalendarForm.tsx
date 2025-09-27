import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AddCalendarForm() {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Calendar</DialogTitle>
        <DialogDescription>
          Add a new calendar to organize your events.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" defaultValue="School" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="color">Color</Label>
          <Input
            className="h-10 w-20 p-0 border-0"
            id="color"
            name="color"
            type="color"
            defaultValue="#22C55E"
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit">Add</Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddCalendarForm;
