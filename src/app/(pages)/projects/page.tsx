import { ProjectCard } from "@/components/project-card/project-card";

const PROJECTS = [...new Array(10)].map((_, index) => ({
  id: `${index}`,
  title: `Adoddle ${index}`,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  endDate: "2025-04-25 15:48:39.768",
  tasks: [...new Array(Math.floor(1 + Math.random() * 10))],
  team: [...new Array(Math.floor(1 + Math.random() * 10))].map((_, index) => ({
    id: `${index}`,
    firstName: "asd",
    lastName: "zxc",
    email: "asd",
    imageSrc:
      "https://lh3.googleusercontent.com/a/ACg8ocL6HpwyoQs-vnxNKZGMQhbSJ8HlKk9K0s1d5NcYjX1g0vcvzw=s96-c",
  })),
}));

export default function ProjectsPage() {
  return (
    <section className="p-8">
      <h2 className="text-3xl">Projects</h2>
      <div className="grid gap-2 grid-cols-3 grid-rows-2">
        {PROJECTS.map(({ id, title, text, tasks, team }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            text={text}
            tasks={tasks}
            team={team}
          />
        ))}
      </div>
    </section>
  );
}
