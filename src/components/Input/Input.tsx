import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import cn from 'classnames';
import styles from './Input.module.scss';

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  clearValue?: () => void;
}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <>
      <input className={cn(styles.input, className)} type="text" {...props} />
    </>
  );
};
