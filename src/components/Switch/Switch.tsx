import { useId } from 'react';
import styles from './Switch.module.scss';

interface Props {
  checked?: boolean;
  onChange?: () => void;
}

export const Switch = ({ checked, onChange }: Props) => {
  const inputId = useId();
  return (
    <>
      <input
        className={styles.switch}
        type="checkbox"
        id={inputId}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={inputId}></label>
    </>
  );
};
