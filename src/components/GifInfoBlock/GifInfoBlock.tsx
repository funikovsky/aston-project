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
  const { id } = useAuth();
  const { isGifInFavorits } = useIsGifInFavorits(id, gif.id);
  const { addGifToFaforits, removeGifFromFavorits } = useOperationsWithFavorits();

  return (
    <FlexBlock className={styles.container} jc="center">
      <div className={styles.gifblock}>
        <ImageContainer url={gif.url} />
      </div>
      <FlexBlock direction="column" className={styles.infoblock}>
        <span>{`Название: ${gif.title}`}</span>
        <span>Автор: {gif.username || 'Не указан'}</span>
        <span>{`Дата создания: ${gif.import_datetime}`}</span>
        {id && (
          <GifInfoButtons
            isGif={isGifInFavorits}
            addGif={() => addGifToFaforits(id, gif.id)}
            removeGif={() => removeGifFromFavorits(id, gif.id)}
          />
        )}
      </FlexBlock>
    </FlexBlock>
  );
};
