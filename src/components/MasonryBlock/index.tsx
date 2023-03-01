import Masonry from 'react-masonry-css';

import { breakpointColumnsObj } from '../../common/variables';
import { GifItem } from '../../common/types';
import { GiftItem } from '../GifItem';

import styles from './Mansory.module.scss';

interface Props {
  items: Array<GifItem>;
}

export const MasonryBlock = ({ items }: Props) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.my_masonry_grid}
      columnClassName={styles.my_masonry_grid_column}>
      {items.map((item) => (
        <GiftItem key={item.id} url={item.url} />
      ))}
    </Masonry>
  );
};
