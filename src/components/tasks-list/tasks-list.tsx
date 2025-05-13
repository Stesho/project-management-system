import { Task } from "@/types/task";
import { TaskItem } from "@/components/task-item/task-item";

interface TasksListProps {
  tasks: Task[];
}

export function TasksList({ tasks }: TasksListProps) {
  return (
    <ul className="flex flex-col p-6 bg-white rounded-2xl gap-6">
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
}
