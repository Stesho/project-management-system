import { Status } from "@/constants/status";

interface SatusBarProps {
  status: Status;
  className?: string;
}

const statusStyle = {
  [Status.completed]: "bg-green-100 text-green-600",
  [Status.canceled]: "bg-red-100 text-red-900",
};

export function StatusBar({ status, className }: SatusBarProps) {
  return (
    <div
      className={`flex items-center text-xs font-medium capitalize ${
        statusStyle[status]
      } ${className || ""}`}
    >
      {status}
    </div>
  );
}
