import styles from './TextInput.module.css';

type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextInput: React.FC<TextInputProps> = (props) => {
  return <input className={styles.input} {...props} />;
};
