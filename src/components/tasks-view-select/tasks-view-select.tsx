"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";
import { Views } from "@/constants/projects";
import { Routes } from "@/constants/routing";
import NotebookImg from "../../../public/notebook.svg";

interface TasksViewSelectProps {
  id: string;
  view: Views;
}

export function TasksViewSelect({ id, view }: TasksViewSelectProps) {
  const router = useRouter();

  const handleViewChange = (view: Views) =>
    router.push(`${Routes.projects}/${id}?view=${view}`);

  return (
    <Select value={view} onValueChange={handleViewChange}>
      <SelectTrigger className="capitalize text-lg p-4 shadow-md">
        <SelectValue>
          <Image src={NotebookImg} height={16} width={16} alt="notebook" />
          <span>{view} view</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.values(Views).map((view) => (
          <SelectItem key={view} value={view} className="capitalize text-lg">
            {view} view
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
