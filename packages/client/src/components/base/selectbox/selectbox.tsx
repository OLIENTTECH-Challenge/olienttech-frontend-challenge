import styles from './selectbox.module.css';
import { useState, ChangeEvent } from 'react';

type SelectboxProps = {
  options: string[];
  label: string;
  value?: string;
  onSelect: (selectedValue: string) => void;
};

export const Selectbox = ({ options, label, onSelect }: SelectboxProps) => {
  const [selectedValue, setSelectedValue] = useState(options[0] || '');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <p className={styles.label}>{label}</p>
      <select className={styles.selectbox} value={selectedValue} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
