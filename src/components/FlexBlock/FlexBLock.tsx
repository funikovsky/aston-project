import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';
import styles from './FlexBlock.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  jc?: 'end' | 'center' | 'start';
}
export const FlexBlock = ({ children, className, jc, ...props }: Props) => {
  return (
    <div
      className={cn(styles.flex, className, {
        [styles.center]: jc === 'center',
        [styles.end]: jc === 'end',
        [styles.start]: jc === 'start',
      })}
      {...props}>
      {children}
    </div>
  );
};
