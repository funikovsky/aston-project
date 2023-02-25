import { GiftList } from '../components/GifList';
import { useAppSelector } from '../hooks/useAppHooks';

export const TrendingGifPage = () => {
  const dataTrendingGif = useAppSelector((state) => state.project.dataTrendingGif);

  return (
    <>
      <GiftList dataGif={dataTrendingGif} />
    </>
  );
};
