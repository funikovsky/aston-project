import { useAppDispatch, useAppSelector } from '../hooks/useAppHooks';
import { GiftList } from '../components/GifList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { dataGifsOfTrendingSelector } from '../redux/slice/selectors/dataGifsSelectors';
import { FlexBlock } from '../components/FlexBlock/FlexBLock';
import { Button } from '../components/Button/Button';
import { increaseOffSet } from '../redux/slice/projectSlice';

export const TrendingGifPage = () => {
  const dataTrendingGif = useAppSelector(dataGifsOfTrendingSelector);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>ТОП GIFS</h2>
      <ErrorBoundary>
        <GiftList dataGif={dataTrendingGif} />
        <FlexBlock jc="center">
          <Button onClick={() => dispatch(increaseOffSet())}>Load more</Button>
        </FlexBlock>
      </ErrorBoundary>
    </>
  );
};
