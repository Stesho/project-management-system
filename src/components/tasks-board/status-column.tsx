import { Task } from "@/types/task";
import { BoardTask } from "./board-task";
import { Status } from "@/constants/status";
import { TaskCreatingButton } from "../task-creating-button/task-creating-button";

interface StatusColumnProps {
  tasks: Task[];
  status: Status;
}

export function StatusColumn({ tasks, status }: StatusColumnProps) {
  return (
    <div key={status} className="shrink-0 bg-white rounded-xl shadow-md">
      <h3 className="p-3 bg-blue-50 rounded-t-xl capitalize">{status}</h3>
      <ul className="flex flex-col gap-4 p-3">
        <TaskCreatingButton />
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <li key={task.id}>
              <BoardTask task={task} />
            </li>
          ))}
      </ul>
    </div>
  );
}
