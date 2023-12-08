import React from 'react';
import styles from './popup-footer.module.css';

type PopupFooterProps = {
  children: React.ReactNode;
};

export const PopupFooter = ({ children }: PopupFooterProps) => <div className={styles.footer}>{children}</div>;
