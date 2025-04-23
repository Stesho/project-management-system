"use client";

import styles from "./button.module.scss";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
