export type EventType = "lecture" | "study" | "personal" | "assignment";

export type DeadlineStatus = "due-today" | "due-soon" | "upcoming";

export interface Event {
  id: string;
  title: string;
  type: EventType;
  time: string;
  room?: string;
  professor?: string;
}

export interface Deadline {
  id: string;
  title: string;
  status: DeadlineStatus;
  dueDate: string;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number; // Add index signature for recharts compatibility
}

export const EVENT_COLORS = {
  lecture: "#3B82F6", // blue
  study: "#22C55E", // green
  assignment: "#EF4444", // red
  personal: "#F59E0B", // yellow
} as const;

export const getEventColor = (type: EventType): string => {
  switch (type) {
    case "lecture":
      return "bg-blue-500";
    case "study":
      return "bg-green-500";
    case "personal":
      return "bg-yellow-500";
    case "assignment":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};
