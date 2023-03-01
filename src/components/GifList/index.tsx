import { GifItem } from '../../common/types';
import { MasonryBlock } from '../MasonryBlock';

interface Props {
  dataGif: Array<GifItem>;
}

export const GiftList = ({ dataGif }: Props) => {
  return <MasonryBlock items={dataGif} />;
};
