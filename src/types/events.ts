export type DeadlineStatus = "due-today" | "due-soon" | "upcoming";

export type EventType = "LECTURE" | "STUDY" | "ASSIGNMENT" | "EXAM" | "OTHER";

export type Priority = "HIGH" | "MEDIUM" | "LOW";

export type EventStatus =
  | "SCHEDULED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export interface Event {
  id: string;
  title: string;
  type: EventType;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
  startTime: Date;
  endTime: Date;
  isAllDay: boolean;
  color: string;
  priority: Priority;
  status: EventStatus;
  isRecurring: boolean;
  recurrencePattern?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
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
    case "LECTURE":
      return "bg-blue-500";
    case "STUDY":
      return "bg-green-500";
    case "EXAM":
      return "bg-yellow-500";
    case "ASSIGNMENT":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};
