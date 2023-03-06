import { useEffect } from 'react';
import { GiftList } from '../components/GifList';
import { useAppDispatch } from '../hooks/useAppHooks';
import { useAuth } from '../hooks/useAuth';
import { useIsGifInFavorits } from '../hooks/useIsGifInFavorits';
import { getGifsByIdsThunk } from '../redux/slice/asyncThunks/getGifsByIdsThunk';

export const FavoritsPage = () => {
  const dispatch = useAppDispatch();
  const { idOfCurrentUser } = useAuth();

  const { isDataFavorits, dataFavoritsId, dataFavoritsGif } = useIsGifInFavorits(idOfCurrentUser);

  useEffect(() => {
    if (!isDataFavorits) return;
    if (idOfCurrentUser)
      dispatch(getGifsByIdsThunk({ ids: dataFavoritsId, userId: idOfCurrentUser }));
  }, [dataFavoritsId]);

  if (!dataFavoritsId.length) return <div>На данный момент в избранное ничего не добавлено</div>;

  return (
    <div>
      <h2>ИЗБРАННОЕ</h2>
      <GiftList dataGif={dataFavoritsGif} />
    </div>
  );
};
