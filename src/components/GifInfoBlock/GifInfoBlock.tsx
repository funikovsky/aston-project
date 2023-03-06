import { useAuth } from '../../hooks/useAuth';
import { useOperationsWithFavorits } from '../../hooks/useOperationsWithFavorits';
import { useIsGifInFavorits } from '../../hooks/useIsGifInFavorits';

import { GifItem } from '../../common/types';
import { FlexBlock } from '../FlexBlock/FlexBLock';
import { ImageContainer } from '../ImageContainer/ImageContainer';
import { GifInfoButtons } from './GifInfoButtons/GifInfoButtons';

import styles from './GifInfoBlock.module.scss';

interface Props {
  gif: GifItem;
}

export const GifInfoBlock = ({ gif }: Props) => {
  const { idOfCurrentUser } = useAuth();
  const { isGifInFavorits } = useIsGifInFavorits(idOfCurrentUser, gif.id);
  const { addGifToFavorits, removeGifFromFavorits } = useOperationsWithFavorits();

  return (
    <FlexBlock className={styles.container} jc="center">
      <div className={styles.gifblock}>
        <ImageContainer url={gif.url} />
      </div>
      <FlexBlock direction="column" className={styles.infoblock}>
        <span>{`Название: ${gif.title}`}</span>
        <span>Автор: {gif.username || 'Не указан'}</span>
        <span>{`Дата создания: ${gif.import_datetime}`}</span>
        {idOfCurrentUser && (
          <GifInfoButtons
            isGifInFavorits={isGifInFavorits}
            addGif={() => addGifToFavorits(idOfCurrentUser, gif.id)}
            removeGif={() => removeGifFromFavorits(idOfCurrentUser, gif.id)}
          />
        )}
      </FlexBlock>
    </FlexBlock>
  );
};
