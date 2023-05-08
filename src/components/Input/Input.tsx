import { DetailedHTMLProps, InputHTMLAttributes, ForwardedRef, forwardRef } from 'react';

import cn from 'classnames';
import styles from './Input.module.scss';

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  clearValue?: () => void;
}

export const Input = forwardRef(
  ({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input className={cn(styles.input, className)} type="text" {...props} ref={ref} />;
  },
);
