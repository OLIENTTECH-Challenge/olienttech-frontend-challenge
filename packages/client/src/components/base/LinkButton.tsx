import { classNames } from '@/libs/utils';
import type { ReactNode } from 'react';
import styles from './LinkButton.module.css';

type LinkButtonProps = {
  variant?: 'filled' | 'outlined';
  href: string;
  children: ReactNode;
};

export const LinkButton = ({ children, href, variant = 'filled' }: LinkButtonProps) => {
  const buttonClass = (() => {
    switch (variant) {
      case 'filled':
        return styles.filled;
      case 'outlined':
        return styles.outlined;
    }
  })();

  return (
    <a role='button' className={classNames(styles.base, buttonClass)} href={href}>
      {children}
    </a>
  );
};
