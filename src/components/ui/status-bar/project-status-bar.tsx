import { Status } from "@/constants/status";
import { StatusBar } from "./status-bar";

interface ProjectStatusBarProps {
  status: Status;
}

export function ProjectStatusBar({ status }: ProjectStatusBarProps) {
  return <StatusBar status={status} className="px-5 py-2 rounded-[4]" />;
}
