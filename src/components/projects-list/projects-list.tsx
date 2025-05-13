"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card/project-card";

const PROJECTS = [...new Array(10)].map((_, index) => ({
  id: `${index}`,
  title: `Adoddle ${index}`,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  endDate: "2025-04-25 15:48:39.768",
  tasks: [...new Array(10)],
  team: [...new Array(10)].map((_, index) => ({
    id: `${index}`,
    firstName: "First",
    lastName: "Last",
    email: "email@gmail.com",
    imageSrc:
      "https://lh3.googleusercontent.com/a/ACg8ocL6HpwyoQs-vnxNKZGMQhbSJ8HlKk9K0s1d5NcYjX1g0vcvzw=s96-c",
  })),
}));

const PAGE_SIZE = 6;

export function ProjectsList() {
  const [currentPage, setCurrentPage] = useState(0);

  const projectsFirstIndex = currentPage * PAGE_SIZE;
  const projectsLastIndex = projectsFirstIndex + PAGE_SIZE;

  const onChangePage = (index: number) => () => setCurrentPage(index);
  const onPrevPage = () =>
    setCurrentPage((curr) => (curr > 0 ? curr - 1 : curr));
  const onNextPage = () =>
    setCurrentPage((curr) =>
      curr < Math.ceil(PROJECTS.length / 6) - 1 ? curr + 1 : curr
    );

  return (
    <div>
      <ul className="grid gap-2 grid-cols-3 grid-rows-2">
        {PROJECTS.slice(projectsFirstIndex, projectsLastIndex).map(
          ({ id, title, text, tasks, team }) => (
            <li key={id}>
              <ProjectCard
                id={id}
                title={title}
                text={text}
                tasks={tasks}
                team={team}
              />
            </li>
          )
        )}
      </ul>
      <div className="flex w-full justify-center items-center mt-[50]">
        <button
          className="h-7.5 px-2 mr-[15] rounded-[5] hover:bg-sky-100 cursor-pointer"
          onClick={onPrevPage}
        >
          Previous
        </button>
        {[...new Array(Math.ceil(PROJECTS.length / 6))].map((_, index) => (
          <button
            key={index}
            onClick={onChangePage(index)}
            className={`flex justify-center items-center size-7.5 mx-[5] rounded-[5] hover:bg-sky-100 cursor-pointer ${
              currentPage === index ? "bg-sky-200" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="h-7.5 px-2 ml-[15] rounded-[5] hover:bg-sky-100 cursor-pointer"
          onClick={onNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
