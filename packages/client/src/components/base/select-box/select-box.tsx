import styles from './select-box.module.css';
import { useState, ChangeEvent } from 'react';

type SelectBoxProps = {
  options: string[];
  label: string;
  onSelect: (selectedValue: string) => void;
};

const SelectBox = ({ options, label, onSelect }: SelectBoxProps) => {
  const [selectedValue, setSelectedValue] = useState(options[0] || '');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select className={styles.selectBox} value={selectedValue} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
