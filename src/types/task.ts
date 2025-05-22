import { Status } from "@/constants/status";
import { User } from "./user";
import { Comment } from "./comment";

export interface Task {
  id: string;
  title: string;
  performer: User;
  status: Status;
  startDate: string;
  endDate: string;
  description: string;
  comments: Comment[];
}
