import { useAppSelector } from '../hooks/useAppHooks';
import { GiftList } from '../components/GifList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export const TrendingGifPage = () => {
  const dataTrendingGif = useAppSelector((state) => state.project.dataTrendingGifs);

  return (
    <>
      <h2>ТОП GIFS</h2>
      <ErrorBoundary>
        <GiftList dataGif={dataTrendingGif} />
      </ErrorBoundary>
    </>
  );
};
