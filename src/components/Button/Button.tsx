import cn from 'classnames';
import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

export interface BtnProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
  size?: string;
}

export const Button = ({ children, className, variant, size, ...props }: BtnProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.secondary]: variant === 'secondary',
        [styles.link]: variant === 'link',
        [styles.large]: size === 'large',
        [styles.small]: size === 'small',
      })}
      {...props}>
      {children}
    </button>
  );
};
