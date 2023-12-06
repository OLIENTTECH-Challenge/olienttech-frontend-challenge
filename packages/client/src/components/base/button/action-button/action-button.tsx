import { ReactNode, useState } from 'react';
import styles from './action-button.module.css';

type ActionButtonProps = {
  children: ReactNode;
  variant: 'outlined' | 'filled';
  onClick: () => Promise<void>;
};

export const ActionButton = ({ children, variant, onClick }: ActionButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick();
    } finally {
      setIsLoading(false);
    }
  };

  const buttonClass = isLoading ? `${styles.button} ${styles['loading']}` : styles.button;

  return (
    <button className={`${buttonClass} ${styles[variant]}`} onClick={() => handleClick()} disabled={isLoading}>
      {children}
    </button>
  );
};

export default ActionButton;
