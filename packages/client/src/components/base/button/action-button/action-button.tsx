import React, { useState, MouseEvent } from 'react';
import styles from './action-button.module.css';
import { classNames } from '@/libs/utils';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ActionButtonProps = {
  variant: 'outlined' | 'filled';
} & Pick<HTMLButtonProps, 'children' | 'onClick'>;

export const ActionButton = ({ children, variant, onClick }: ActionButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    if (onClick) {
      onClick(event);
    }
  };

  const buttonClass = isLoading ? `${styles.button} ${styles['loading']}` : styles.button;

  return (
    <button className={classNames(buttonClass, styles[variant])} onClick={handleClick} disabled={isLoading}>
      {children}
    </button>
  );
};

export default ActionButton;
