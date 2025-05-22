import { Status } from "@/constants/status";
import { Task } from "@/types/task";
import { StatusColumn } from "./status-column";

interface TasksBoardProps {
  tasks: Task[];
}

export function TasksBoard({ tasks }: TasksBoardProps) {
  return (
    <div className="flex gap-5 p-4 bg-white max-w-full rounded-xl overflow-scroll">
      {Object.values(Status).map((status) => (
        <StatusColumn key={status} status={status} tasks={tasks} />
      ))}
    </div>
  );
}
