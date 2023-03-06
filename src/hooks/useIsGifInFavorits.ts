import { GifItem } from '../common/types';
import { useAppSelector } from './useAppHooks';

export const useIsGifInFavorits = (userId: string | null, gifId?: string) => {
  const dataFavorits = useAppSelector((state) => state.dataBase.dataBase);
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
    dataFavoritsId.length && (isDataFavorits = true);
  }

  return {
    isGifInFavorits,
    dataFavoritsId,
    isDataFavorits,
    dataFavoritsGif,
  };
};
