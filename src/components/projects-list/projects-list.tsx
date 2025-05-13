"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card/project-card";
import { PROJECTS } from "@/constants/projects";

const PAGE_SIZE = 6;

export function ProjectsList() {
  const [currentPage, setCurrentPage] = useState(0);

  const projectsFirstIndex = currentPage * PAGE_SIZE;
  const projectsLastIndex = projectsFirstIndex + PAGE_SIZE;

  const onChangePage = (index: number) => () => setCurrentPage(index);
  const onPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const onNextPage = () => {
    if (currentPage < Math.ceil(PROJECTS.length / 6) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

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
