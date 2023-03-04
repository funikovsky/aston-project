import { GifItem } from '../../common/types';
import { FlexBlock } from '../FlexBlock/FlexBLock';
import { ImageContainer } from '../ImageContainer/ImageContainer';

import styles from './GifInfoBlock.module.scss';

interface Props {
  gif: GifItem;
}

export const GifInfoBlock = ({ gif }: Props) => {
  return (
    <FlexBlock className={styles.container} jc="center">
      <div className={styles.gifblock}>
        <ImageContainer url={gif.url} />
      </div>
      <FlexBlock direction="column" className={styles.infoblock}>
        <span>{`Название: ${gif.title}`}</span>
        <span>Автор: {gif.username || 'Не указан'}</span>
        <span>{`Дата создания: ${gif.import_datetime}`}</span>
      </FlexBlock>
    </FlexBlock>
  );
};
