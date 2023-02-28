import cn from 'classnames';
import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <>
      <button className={cn(styles.button, className)} {...props}>
        {children}
      </button>
    </>
  );
};
