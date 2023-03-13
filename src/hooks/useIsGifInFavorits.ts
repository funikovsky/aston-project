import { GifItem } from '../common/types';
import { dataBaseSelector } from '../redux/slice/selectors/dataBaseSelectors';
import { useAppSelector } from './useAppHooks';

export const useIsGifInFavorits = (userId: string | null, gifId?: string) => {
  const dataFavorits = useAppSelector(dataBaseSelector);
  let isGifInFavorits = false;
  let dataFavoritsId: Array<string> = [];
  let isDataFavorits = false;
  let dataFavoritsGif: Array<GifItem> = [];

  if (userId && gifId) {
    isGifInFavorits = dataFavorits[userId].favoritsId.includes(gifId);
  }
  if (userId) {
    dataFavoritsGif = dataFavorits[userId].dataFavoritsGif;
    dataFavoritsId = dataFavorits[userId].favoritsId;
  }
  if (userId && dataFavoritsId.length) isDataFavorits = true;

  return {
    isGifInFavorits,
    dataFavoritsId,
    isDataFavorits,
    dataFavoritsGif,
  };
};
