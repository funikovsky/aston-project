import { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './CustomLink.module.scss';

import cn from 'classnames';
import { ThemeContext } from '../../hoc/ThemeProvider';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  href: string;
}

export const CustomLink = ({ children, href, className, ...props }: Props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={cn(
        styles.tag,
        className,
        href,
        {
          [styles.dark]: themeContext?.theme == 'dark',
        },
        { ...props },
      )}>
      <Link to={href}>{children}</Link>
    </div>
  );
};
