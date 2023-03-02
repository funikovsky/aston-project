import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';
import styles from './FlexBlock.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  jc?: 'end' | 'center' | 'start';
  direction?: 'column';
  cgap20?: boolean;
}
export const FlexBlock = ({ children, className, jc, direction, cgap20, ...props }: Props) => {
  return (
    <div
      className={cn(styles.flex, className, {
        [styles.center]: jc === 'center',
        [styles.end]: jc === 'end',
        [styles.start]: jc === 'start',
        [styles.column]: direction === 'column',
        [styles.columngap]: cgap20,
      })}
      {...props}>
      {children}
    </div>
  );
};
