import styles from './selectbox.module.css';
import { useState, ChangeEvent } from 'react';

type OptionType = {
  label: string;
  value: string;
};

type SelectboxProps = {
  options: OptionType[];
  label: string;
  onSelect: (selectedValue: string) => void;
};

export const Selectbox = ({ options, label, onSelect }: SelectboxProps) => {
  const [selectedValue, setSelectedValue] = useState(options[0]?.value || '');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <p className={styles.label}>{label}</p>
      <select className={styles.selectbox} value={selectedValue} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
