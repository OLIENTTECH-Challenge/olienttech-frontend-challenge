import styles from './popup-header.module.css';

type PopupHeaderProps = {
  onClose: () => void;
};

export const PopupHeader = ({ onClose }: PopupHeaderProps) => (
  <div className={styles.header}>
    <span className={styles.closeButton} onClick={onClose}>
      &times;
    </span>
  </div>
);
