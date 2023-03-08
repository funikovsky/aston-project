import { useParams } from 'react-router-dom';

import { useGetGifsBySearchParamQuery } from '../../redux/query/searchGifsQuery';
import { GiftList } from '../GifList';

export const ListOfGifsFromHistory = () => {
  const { searchParam } = useParams();
  const { data, isLoading } = useGetGifsBySearchParamQuery(searchParam!);

  if (searchParam) {
    isLoading && <div> ...загрузка</div>;

    if (data?.length) {
      return <GiftList dataGif={data} />;
    } else return <div>{`По запросу "${searchParam}" результатов поиска нет`}</div>;
  }

  return <div>Что-то пошло не так!</div>;
};
