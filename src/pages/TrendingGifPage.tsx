import { GiftList } from '../components/GifList';
import { useAppSelector } from '../hooks/useAppHooks';

export const TrendingGifPage = () => {
  const dataTrendingGif = useAppSelector((state) => state.project.dataTrendingGifs);

  return (
    <>
      <GiftList dataGif={dataTrendingGif} />
    </>
  );
};
