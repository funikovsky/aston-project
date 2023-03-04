import { useState } from 'react';
import { GifItem } from '../../common/types';
import { CustomLink } from '../CustomLink/CustomLink';
import { ImageContainer } from '../ImageContainer/ImageContainer';

import styles from './GifItem.module.scss';

interface Props {
  gif: GifItem;
}

export const GiftItem = ({ gif }: Props) => {
  const [visibleButton, setVisibleButton] = useState<Boolean>(false);
  const toggleVisibleButton = () => {
    setVisibleButton((prev) => !prev);
  };
  return (
    <div
      className={styles.gifblock}
      onMouseEnter={toggleVisibleButton}
      onMouseLeave={toggleVisibleButton}>
      <ImageContainer url={gif.url} />
      {visibleButton && (
        <CustomLink className={styles.tag} href={`/gifs/${gif.id}`}>
          Подробнее
        </CustomLink>
      )}
    </div>
  );
};
