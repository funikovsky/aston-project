import { GifItem } from '../../redux/slice/asyncThunks/getTrendingGifThunk';
import { MasonryBlock } from '../MasonryBlock';

interface Props {
  dataGif: Array<GifItem>;
}

export const GiftList = ({ dataGif }: Props) => {
  return <MasonryBlock items={dataGif} />;
};
