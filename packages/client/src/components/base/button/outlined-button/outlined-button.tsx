import { useState } from 'react';
import styles from './outlined-button.module.css';

type OutlinedButtonProps = {
  label: string;
  loadingLabel: string;
  color: string;
  onClick: () => Promise<void>;
};

export const OutlinedButton = ({ label, loadingLabel, color, onClick }: OutlinedButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick();
    } finally {
      setIsLoading(false);
    }
  };

  const buttonStyle = {
    color: isLoading ? '#ccc' : isHovered ? 'white' : color,
    borderColor: isLoading ? '#ccc' : color,
    backgroundColor: isHovered && !isLoading ? color : 'transparent',
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      disabled={isLoading}
      style={buttonStyle}
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseOut={() => {
        setIsHovered(false);
      }}
    >
      {isLoading ? loadingLabel : label}
    </button>
  );
};

export default OutlinedButton;
