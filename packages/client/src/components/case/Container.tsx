import { classNames } from '@/libs/utils';
import type { ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
