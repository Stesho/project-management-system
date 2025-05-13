import { Status } from "@/constants/status";
import { User } from "./user";

export interface Task {
  id: string;
  title: string;
  performer: User;
  status: Status;
  startDate: string;
  endDate: string;
  description: string;
}
