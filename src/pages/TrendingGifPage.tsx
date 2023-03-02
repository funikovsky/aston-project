import { useAppSelector } from '../hooks/useAppHooks';
import { GiftList } from '../components/GifList';

export const TrendingGifPage = () => {
  const dataTrendingGif = useAppSelector((state) => state.project.dataTrendingGifs);

  return <GiftList dataGif={dataTrendingGif} />;
};
