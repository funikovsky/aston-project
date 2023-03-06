import { addFavoritsId, removeFavoritsId } from '../redux/slice/dataBaseSlice';
import { useAppDispatch } from './useAppHooks';

export const useOperationsWithFavorits = () => {
  const dispatch = useAppDispatch();

  const addGifToFavorits = (userId: string, gifId: string) => {
    dispatch(addFavoritsId({ userId, gifId }));
  };

  const removeGifFromFavorits = (userId: string, gifId: string) => {
    dispatch(removeFavoritsId({ userId, gifId }));
  };

  return {
    addGifToFavorits,
    removeGifFromFavorits,
  };
};
