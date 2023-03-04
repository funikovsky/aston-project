import { ReactNode } from 'react';
import Masonry from 'react-masonry-css';
import { breakpointColumnsObj } from '../../common/variables';

import styles from './Mansory.module.scss';

interface Props {
  children: ReactNode;
}

export const MasonryBlock = ({ children }: Props) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.my_masonry_grid}
      columnClassName={styles.my_masonry_grid_column}>
      {children}
    </Masonry>
  );
};
