import { GifItem } from '../../common/types';
import { GiftItem } from '../GifItem';
import { MasonryBlock } from '../MasonryBlock';

interface Props {
  dataGif: Array<GifItem>;
}

export const GiftList = ({ dataGif }: Props) => {
  return (
    <MasonryBlock>
      {dataGif.map((itemGif) => (
        <GiftItem key={itemGif.id} gif={itemGif} />
      ))}
    </MasonryBlock>
  );
};
