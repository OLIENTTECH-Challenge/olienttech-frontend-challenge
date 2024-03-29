import { classNames } from '@/libs/utils';
import type React from 'react';
import styles from './Button.module.css';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  variant: 'outlined' | 'filled';
  isLoading?: boolean;
} & Pick<HTMLButtonProps, 'children' | 'onClick'>;

export const Button = ({ children, variant, onClick, isLoading }: ButtonProps) => {
  const buttonClass = isLoading ? `${styles.button} ${styles.loading}` : styles.button;

  return (
    <button type='button' className={classNames(buttonClass, styles[variant])} onClick={onClick} disabled={isLoading}>
      {isLoading ? <div className={styles.spinner} /> : children}
    </button>
  );
};
