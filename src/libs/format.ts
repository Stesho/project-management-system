export const formatDeadline = (deadline: string) => {
  const date = new Date(deadline);
  const year = date.getFullYear();
  const month = date.toLocaleString("en", { month: "long" });
  const day = date.getDate();

  return `${day} ${month} ${year}`;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const month = (monthIndex + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${day}/${month}/${year}`;
};
