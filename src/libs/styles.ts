import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getShiftMap = (count: number) => {
  const shiftForElement = 2;

  return [...new Array(count)].map(
    (_, index) => `right-${index * shiftForElement}`
  );
};
