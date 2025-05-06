import Image from "next/image";
import IssuesImg from "../../../public/issues.svg";
import { Status } from "@/constants/status";
import { ProjectStatusBar } from "../ui/status-bar/project-status-bar";
import { formatDeadline } from "@/libs/format";
import { Task } from "@/types/task";
import { User } from "@/types/user";

interface ProjectCardProps {
  title: string;
  text: string;
  tasks: Task[];
  team: User[];
}

export function ProjectCard({ title, text, tasks, team }: ProjectCardProps) {
  return (
    <div className="p-4 bg-white rounded-2xl">
      <div className="flex justify-between pb-2 border-b border-black">
        <h3 className="font-bold text-2xl">{title}</h3>
        <ProjectStatusBar status={Status.completed} />
      </div>
      <p className="pt-2 pb-5">{text}</p>
      <span className="text-red-600">
        Deadline: {formatDeadline("2025-04-25 15:48:39.768")}
      </span>
      <div className="flex justify-between mt-2">
        <div className="flex">
          {team.map(({ id, imageSrc, firstName, lastName }) => (
            <Image
              key={id}
              width={35}
              height={35}
              src={imageSrc}
              alt={`${firstName} ${lastName}`}
              className="rounded-full"
            />
          ))}
        </div>
        <div className="flex items-center">
          <Image width={20} height={20} src={IssuesImg} alt="issues" />
          <span className="ml-1">{tasks.length} issues</span>
        </div>
      </div>
    </div>
  );
}
