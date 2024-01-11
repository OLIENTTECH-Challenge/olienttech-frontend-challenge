import { ReactNode } from 'react';
import styles from './Container.module.css';
import { classNames } from '@/libs/utils';

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
