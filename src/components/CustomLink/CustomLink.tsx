import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppHooks';
import styles from './CustomLink.module.scss';

import cn from 'classnames';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  href: string;
  target?: string;
}

export const CustomLink = ({ children, href, target, className, ...props }: Props) => {
  const theme = useAppSelector((state) => state.themeSlice.theme);

  return (
    <div
      className={cn(
        styles.tag,
        className,
        href,
        {
          [styles.dark]: theme === 'dark',
        },
        { ...props },
      )}>
      <Link target={target} to={href}>
        {children}
      </Link>
    </div>
  );
};
