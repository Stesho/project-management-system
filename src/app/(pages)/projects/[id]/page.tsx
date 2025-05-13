import { PROJECTS } from "@/constants/projects";
import { TasksList } from "@/components/tasks-list/tasks-list";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { title, tasks } = PROJECTS[+id];

  return (
    <section>
      <h2 className="text-3xl mb-8">{title}</h2>
      <TasksList tasks={tasks} />
    </section>
  );
}
