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

export const getRemainingTime = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffInMs = end.getTime() - start.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const days = Math.floor(diffInHours / 24);

  const minutes = diffInMinutes % 60;
  const hours = diffInHours % 24;

  const time = { days, hours, minutes };

  return Object.entries(time)
    .filter(([, value]) => value > 0)
    .map(([time, value]) => `${value} ${time}`)
    .join(" ");
};
