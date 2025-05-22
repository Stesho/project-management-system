import { Task } from "@/types/task";
import { BoardTask } from "./board-task";
import { Status } from "@/constants/status";

interface StatusColumnProps {
  tasks: Task[];
  status: Status;
}

export function StatusColumn({ tasks, status }: StatusColumnProps) {
  return (
    <div key={status} className="shrink-0 bg-white rounded-xl shadow-md">
      <div className="p-3 bg-blue-50 rounded-t-xl capitalize">{status}</div>
      <div className="flex flex-col gap-4 p-3">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <BoardTask key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
}
