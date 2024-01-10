import styles from './TextInput.module.css';

type TextInputProps = Pick<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'name' | 'value' | 'type' | 'placeholder'
>;

export const TextInput: React.FC<TextInputProps> = (props) => {
  return <input className={styles.input} {...props} />;
};
