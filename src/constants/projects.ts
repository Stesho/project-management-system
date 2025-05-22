import { Status } from "./status";

export enum Views {
  board = "board",
  list = "list",
}

export const PROJECTS = [...new Array(20)].map((_, index) => ({
  id: `${index}`,
  title: `Adoddle ${index}`,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  endDate: "2025-04-25 15:48:39.768",
  tasks: [...new Array(10)].map((_, index) => ({
    id: `${index}`,
    title: `Title ${index}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    startDate: "2025-01-01 15:48:39.768",
    endDate: "2025-02-02 15:48:39.768",
    status: index < 5 ? Status.completed : Status.canceled,
    performer: {
      id: `${index}`,
      firstName: "First",
      lastName: "Last",
      email: "email@gmail.com",
      imageSrc:
        "https://lh3.googleusercontent.com/a/ACg8ocL6HpwyoQs-vnxNKZGMQhbSJ8HlKk9K0s1d5NcYjX1g0vcvzw=s96-c",
    },
    comments: [
      {
        text: "Comment text",
        author: {
          id: `${index}`,
          firstName: "First",
          lastName: "Last",
          email: "email@gmail.com",
          imageSrc:
            "https://lh3.googleusercontent.com/a/ACg8ocL6HpwyoQs-vnxNKZGMQhbSJ8HlKk9K0s1d5NcYjX1g0vcvzw=s96-c",
        },
      },
    ],
  })),
  team: [...new Array(10)].map((_, index) => ({
    id: `${index}`,
    firstName: "First",
    lastName: "Last",
    email: "email@gmail.com",
    imageSrc:
      "https://lh3.googleusercontent.com/a/ACg8ocL6HpwyoQs-vnxNKZGMQhbSJ8HlKk9K0s1d5NcYjX1g0vcvzw=s96-c",
  })),
}));
