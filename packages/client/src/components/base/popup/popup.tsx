import React from 'react';
import styles from './popup.module.css';

type PopupProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Popup = ({ children, onClose }: PopupProps) => (
  <>
    <div className={styles.overlay} onClick={onClose}></div>
    <div className={styles.popup}>{children}</div>
  </>
);
