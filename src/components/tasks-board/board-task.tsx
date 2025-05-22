import Image from "next/image";
import { Task } from "@/types/task";
import ClockImg from "../../../public/clock.svg";
import CloudCommentImg from "../../../public/cloud-comment.svg";
import { getRemainingTime } from "@/libs/format";

interface BoardTaskProps {
  task: Task;
}

export function BoardTask({ task }: BoardTaskProps) {
  return (
    <div className="p-4 border rounded-sm font-light text-sm">
      <div className="flex justify-between">
        <span className="text-base font-medium">{task.title}</span>
        <div className="flex items-center">
          <Image src={ClockImg} width={16} height={16} alt="clock" />
          <span className="ml-2">
            {getRemainingTime(task.startDate, task.endDate)}
          </span>
        </div>
      </div>
      <p className="py-4">{task.description}</p>
      <div className="flex justify-between">
        <div className="flex">
          <Image src={CloudCommentImg} width={18} height={16} alt="comment" />
          <span className="flex items-center ml-3">{task.comments.length}</span>
        </div>
        <Image
          src={task.performer.imageSrc}
          width={26}
          height={26}
          alt={`${task.performer.firstName} ${task.performer.lastName}`}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
