import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GifInfoBlock } from '../components/GifInfoBlock/GifInfoBlock';
import { FeatureFlagProvider } from '../hoc/FeatureFlagProvider';
import { useAppDispatch, useAppSelector } from '../hooks/useAppHooks';
import { getGifByIdThunk } from '../redux/slice/asyncThunks/getGifById';
import { removeDataGifItem } from '../redux/slice/projectSlice';
import { dataGifItemSelector } from '../redux/slice/selectors/dataGifsSelectors';

export const GifInfoPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const gifItem = useAppSelector(dataGifItemSelector);

  if (!id) return <div> Страницы не существует</div>;

  useEffect(() => {
    dispatch(removeDataGifItem());
    dispatch(getGifByIdThunk(id));
  }, []);

  return gifItem ? (
    <FeatureFlagProvider>
      <GifInfoBlock gif={gifItem} />
    </FeatureFlagProvider>
  ) : (
    <div>...Загрузка</div>
  );
};
