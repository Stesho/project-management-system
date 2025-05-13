import { Status } from "@/constants/status";
import { StatusBar } from "./status-bar";

interface TaskStatusBarProps {
  status: Status;
}

export function TaskStatusBar({ status }: TaskStatusBarProps) {
  return <StatusBar status={status} className="py-1 px-3.5 rounded-full" />;
}
