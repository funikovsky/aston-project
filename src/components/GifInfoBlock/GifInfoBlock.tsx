import { GifItem } from '../../common/types';
import { ImageContainer } from '../ImageContainer/ImageContainer';

import styles from './GifInfoBlock.module.scss';

interface Props {
  gif: GifItem;
}

export const GifInfoBlock = ({ gif }: Props) => {
  return (
    <div className={styles.gifblock}>
      <ImageContainer url={gif.url} />
    </div>
  );
};
