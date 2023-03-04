import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GifInfoBlock } from '../components/GifInfoBlock/GifInfoBlock';
import { useAppDispatch, useAppSelector } from '../hooks/useAppHooks';
import { getGifByIdThunk } from '../redux/slice/asyncThunks/getGifById';

export const GifInfoPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const gif = useAppSelector((state) => state.project.dataGifItem);

  useEffect(() => {
    dispatch(getGifByIdThunk(id));
  }, []);
  if (gif) return <GifInfoBlock gif={gif} />;
};
