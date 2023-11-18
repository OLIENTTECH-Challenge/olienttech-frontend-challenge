import { ReactNode } from "react";
import styles from "./flexible-container.module.css";

type FlexibleContainerProps = {
  children: ReactNode;
}

export const FlexibleContainer = ({ children }: FlexibleContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
