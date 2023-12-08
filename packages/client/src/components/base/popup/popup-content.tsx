import React from 'react';
import styles from './popup-content.module.css';

type PopupContentProps = {
  children: React.ReactNode;
};

export const PopupContent = ({ children }: PopupContentProps) => <div className={styles.content}>{children}</div>;
