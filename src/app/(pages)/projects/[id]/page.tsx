import { PROJECTS } from "@/constants/projects";
import { TasksList } from "@/components/tasks-list/tasks-list";

import { redirect } from "next/navigation";
import { TasksViewSelect } from "@/components/tasks-view-select/tasks-view-select";
import { Views } from "@/types/task";
import { Routes } from "@/constants/routing";

interface ProjectLayoutProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    [key: string]: Views;
  }>;
}

export default async function ProjectLayout({
  params,
  searchParams,
}: ProjectLayoutProps) {
  const { view } = await searchParams;
  const { id } = await params;
  const { title, tasks } = PROJECTS[+id];

  if (!view) {
    redirect(`${Routes.projects}/${id}?view=${Views.list}`);
  }

  const renderTasksView = () =>
    view === Views.list ? <TasksList tasks={tasks} /> : <div>Board</div>;

  return (
    <section>
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl">{title}</h2>
        <TasksViewSelect id={id} view={view} />
      </div>
      {renderTasksView()}
    </section>
  );
}
