import { useEffect } from 'react';
import { GiftList } from '../components/GifList';
import { useAppDispatch } from '../hooks/useAppHooks';
import { useAuth } from '../hooks/useAuth';
import { useIsGifInFavorits } from '../hooks/useIsGifInFavorits';
import { getGifsByIdsThunk } from '../redux/slice/asyncThunks/getGifsByIdsThunk';

export const FavoritsPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useAuth();
  if (!id) return <div>Для просмотра избранного необходимо войти в аккаунт</div>;
  const { isDataFavorits, dataFavoritsId, dataFavoritsGif } = useIsGifInFavorits(id);

  useEffect(() => {
    if (!isDataFavorits) return;
    dispatch(getGifsByIdsThunk({ ids: dataFavoritsId, userId: id }));
  }, [dataFavoritsId]);

  if (!dataFavoritsId.length) return <div>На данный момент в избранное ничего не добавлено</div>;

  return (
    <div>
      <h2>ИЗБРАННОЕ</h2>
      <GiftList dataGif={dataFavoritsGif} />
    </div>
  );
};
