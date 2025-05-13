import Image from "next/image";
import { Task } from "@/types/task";
import { formatDate } from "@/libs/format";
import IdeaImg from "../../../public/idea.png";
import CalendarImg from "../../../public/calendar.svg";
import CommentImg from "../../../public/comment.png";
import { TaskStatusBar } from "../ui/status-bar/task-status-bar";

interface TasksListProps {
  tasks: Task[];
}

export function TasksList({ tasks }: TasksListProps) {
  return (
    <ul className="flex flex-col p-6 bg-white rounded-2xl gap-6">
      {tasks.map(({ id, title, performer, status, startDate, endDate }) => (
        <div
          key={id}
          className="flex justify-between items-center p-6 rounded-2xl shadow-ring"
        >
          <div className="flex items-center">
            <div className="mr-4">
              <Image
                width={23}
                height={25}
                src={IdeaImg}
                alt="idea"
                quality={100}
              />
            </div>
            <div>
              <h3 className="font-bold text-base">{title}</h3>
              <div className="flex items-center">
                <div className="text-sm mr-3">
                  #{id} Opened 10 days ago by{" "}
                  <span className="font-bold">
                    {performer.firstName} {performer.lastName}
                  </span>
                </div>
                <TaskStatusBar status={status} />
              </div>
            </div>
          </div>
          <div>
            <span className="font-bold">Start date:</span>
            <div className="flex items-center text-sm">
              <div className="mr-2">
                <Image
                  width={22}
                  height={22}
                  alt="calendar"
                  src={CalendarImg}
                />
              </div>
              <span>{formatDate(startDate)}</span>
            </div>
          </div>
          <div>
            <span className="font-bold">End date:</span>
            <div className="flex items-center text-sm">
              <div className="mr-2">
                <Image
                  width={22}
                  height={22}
                  alt="calendar"
                  src={CalendarImg}
                />
              </div>
              <span>{formatDate(endDate)}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-5">
              <Image
                width={45}
                height={45}
                alt={`${performer.firstName} ${performer.lastName}`}
                src={performer.imageSrc}
                className="rounded-full"
              />
            </div>
            <div>
              <Image width={28} height={28} alt="comment" src={CommentImg} />
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
