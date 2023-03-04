import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './CustomLink.module.scss';

import cn from 'classnames';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  href: string;
}

export const CustomLink = ({ children, href, className, ...props }: Props) => {
  return (
    <div className={cn(styles.tag, className, href, { ...props })}>
      <Link to={href}>{children}</Link>
    </div>
  );
};
