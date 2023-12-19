import React from 'react';
import styles from './action-button.module.css';
import { classNames } from '@/libs/utils';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ActionButtonProps = {
  variant: 'outlined' | 'filled';
  isLoading?: boolean;
} & Pick<HTMLButtonProps, 'children' | 'onClick'>;

export const ActionButton = ({ children, variant, onClick, isLoading }: ActionButtonProps) => {
  const buttonClass = isLoading ? `${styles.button} ${styles['loading']}` : styles.button;

  return (
    <button className={classNames(buttonClass, styles[variant])} onClick={onClick} disabled={isLoading}>
      {isLoading ? <div className={styles.spinner}></div> : children}
    </button>
  );
};

export default ActionButton;
