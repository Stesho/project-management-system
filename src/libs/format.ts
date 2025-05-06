export const formatDeadline = (deadline: string) => {
  const date = new Date(deadline);
  const year = date.getFullYear();
  const month = date.toLocaleString("en", { month: "long" });
  const day = date.getDate();

  return `${day} ${month} ${year}`;
};
