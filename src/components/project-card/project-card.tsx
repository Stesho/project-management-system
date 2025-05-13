import Image from "next/image";
import Link from "next/link";
import IssuesImg from "../../../public/issues.svg";
import { Status } from "@/constants/status";
import { ProjectStatusBar } from "../ui/status-bar/project-status-bar";
import { formatDeadline } from "@/libs/format";
import { Task } from "@/types/task";
import { User } from "@/types/user";
import { Routes } from "@/constants/routing";

interface ProjectCardProps {
  id: string;
  title: string;
  text: string;
  tasks: Task[];
  team: User[];
}

const maxPersonImages = 4;
const shift = ["right-0", "right-2", "right-4", "right-6", "right-8"];

export function ProjectCard({
  id,
  title,
  text,
  tasks,
  team,
}: ProjectCardProps) {
  const slicedTeam = team.slice(0, maxPersonImages);

  return (
    <div className="p-4 bg-white rounded-2xl">
      <Link
        className="flex justify-between pb-2 border-b border-black"
        href={`${Routes.projects}/${id}`}
      >
        <h3 className="font-bold text-2xl">{title}</h3>
        <ProjectStatusBar status={Status.completed} />
      </Link>
      <p className="pt-2 pb-5">{text}</p>
      <span className="text-red-600">
        Deadline: {formatDeadline("2025-04-25 15:48:39.768")}
      </span>
      <div className="flex justify-between mt-2">
        <div className="flex relative">
          {slicedTeam.map(({ id, imageSrc, firstName, lastName }, index) => (
            <Image
              key={id}
              width={35}
              height={35}
              src={imageSrc}
              alt={`${firstName} ${lastName}`}
              className={`relative size-9 rounded-full border border-white ${shift[index]}`}
            />
          ))}
          {team.length > maxPersonImages && (
            <div
              className={`relative flex items-center justify-center size-9 text-red-700 bg-red-200 border border-white rounded-full ${shift[maxPersonImages]}`}
            >
              +{team.length - maxPersonImages}
            </div>
          )}
        </div>
        <div className="flex items-center">
          <Image width={20} height={20} src={IssuesImg} alt="issues" />
          <span className="ml-1">{tasks.length} issues</span>
        </div>
      </div>
    </div>
  );
}
