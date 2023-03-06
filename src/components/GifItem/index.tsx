import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useIsGifInFavorits } from '../../hooks/useIsGifInFavorits';
import { useOperationsWithFavorits } from '../../hooks/useOperationsWithFavorits';
import { GifItem } from '../../common/types';

import { CustomLink } from '../CustomLink/CustomLink';
import { GifInfoButtons } from '../GifInfoBlock/GifInfoButtons/GifInfoButtons';
import { ImageContainer } from '../ImageContainer/ImageContainer';
import { StarIcon } from '../StarIcon/StarIcon';

import styles from './GifItem.module.scss';

interface Props {
  gif: GifItem;
}

export const GiftItem = ({ gif }: Props) => {
  const [visibleButton, setVisibleButton] = useState<Boolean>(false);
  const { addGifToFaforits, removeGifFromFavorits } = useOperationsWithFavorits();
  const { id } = useAuth();
  const { isGifInFavorits } = useIsGifInFavorits(id, gif.id);

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
      {visibleButton && id && (
        <div className={styles.btn_container}>
          <GifInfoButtons
            isGif={isGifInFavorits}
            addGif={() => addGifToFaforits(id, gif.id)}
            removeGif={() => removeGifFromFavorits(id, gif.id)}
          />
        </div>
      )}
      {isGifInFavorits && (
        <div className={styles.svg}>
          <StarIcon />
        </div>
      )}
    </div>
  );
};
