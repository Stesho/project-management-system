"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";
import { Views } from "@/types/task";
import { Routes } from "@/constants/routing";

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
      <SelectTrigger className="capitalize">
        <SelectValue>{view} view</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.keys(Views).map((view) => (
          <SelectItem key={view} value={view} className="capitalize">
            {view} view
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
