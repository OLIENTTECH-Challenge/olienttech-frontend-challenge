import { ReactNode } from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  left?: ReactNode;
  right?: ReactNode;
};

export const Header = ({ left, right }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <div>{left}</div>
        <div>{right}</div>
      </nav>
    </header>
  );
};
