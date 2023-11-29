import React, { useState } from 'react';
import styles from './outlined-button.module.css';

type OutlinedButtonProps = {
  label: string;
  loadingLabel: string;
  color: string;
  onClick: () => void | Promise<void>;
};

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ label, loadingLabel, color, onClick }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const buttonStyle = {
    color: isLoading ? '#ccc' : color,
    borderColor: isLoading ? '#ccc' : color,
    backgroundColor: 'transparent',
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoading) {
      e.currentTarget.style.backgroundColor = color;
      e.currentTarget.style.color = 'white';
    }
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoading) {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = color;
    }
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    e.currentTarget.style.backgroundColor = 'transparent';
    await onClick();
    setIsLoading(false);
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      disabled={isLoading}
      style={buttonStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isLoading ? loadingLabel : label}
    </button>
  );
};

export default OutlinedButton;
