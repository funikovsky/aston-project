import { useAppSelector } from '../hooks/useAppHooks';
import { GiftList } from '../components/GifList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { dataGifsOfTrendingSelector } from '../redux/slice/selectors/dataGifsSelectors';

export const TrendingGifPage = () => {
  const dataTrendingGif = useAppSelector(dataGifsOfTrendingSelector);

  return (
    <>
      <h2>ТОП GIFS</h2>
      <ErrorBoundary>
        <GiftList dataGif={dataTrendingGif} />
      </ErrorBoundary>
    </>
  );
};
