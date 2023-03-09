import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GifInfoBlock } from '../components/GifInfoBlock/GifInfoBlock';
import { useAppDispatch, useAppSelector } from '../hooks/useAppHooks';
import { getGifByIdThunk } from '../redux/slice/asyncThunks/getGifById';
import { removeDataGifItem } from '../redux/slice/projectSlice';

export const GifInfoPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const gifItem = useAppSelector((state) => state.project.dataGifItem);

  if (!id) return <div> Страницы не существует</div>;

  useEffect(() => {
    dispatch(removeDataGifItem());
    dispatch(getGifByIdThunk(id));
  }, []);

  return gifItem ? <GifInfoBlock gif={gifItem} /> : <div>...Загрузка</div>;
};
