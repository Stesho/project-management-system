import { MenuLink } from "../ui/menu-link/menu-link";

import ProjectsImg from "../.../../../../public/menu/projects.svg";
import TasksImg from "../.../../../../public/menu/tasks.svg";
import WorkLogsImg from "../.../../../../public/menu/work-logs.svg";
import PerfomanceImg from "../.../../../../public/menu/perfomance.svg";
import SettingsImg from "../.../../../../public/menu/settings.svg";
import { Routes } from "@/constants/routing";

export function Menu() {
  return (
    <nav>
      <ul className="w-78.5 p-4 pr-[30]">
        <MenuLink
          href={Routes.projects}
          iconSrc={ProjectsImg}
          alt="projects menu"
        >
          Projects
        </MenuLink>
        <MenuLink href={Routes.tasks} iconSrc={TasksImg} alt="tasks menu">
          Tasks
        </MenuLink>
        <MenuLink
          href={Routes.workLogs}
          iconSrc={WorkLogsImg}
          alt="work logs menu"
        >
          Work Logs
        </MenuLink>
        <MenuLink
          href={Routes.perfomance}
          iconSrc={PerfomanceImg}
          alt="perfomance menu"
        >
          Perfomance
        </MenuLink>
        <MenuLink
          href={Routes.settings}
          iconSrc={SettingsImg}
          alt="settings menu"
        >
          Settings
        </MenuLink>
      </ul>
    </nav>
  );
}
