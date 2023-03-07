import { useParams } from 'react-router-dom';

import { useGetGifsBySearchParamQuery } from '../../redux/query/searchGifsQuery';
import { transformResponseData } from '../../utils/utils';
import { GiftList } from '../GifList';

export const ListOfGifsFromHistory = () => {
  const { searchParam } = useParams();

  if (searchParam) {
    const { data, isLoading } = useGetGifsBySearchParamQuery(searchParam);

    isLoading && <div> ...загрузка</div>;

    if (data?.data.length) {
      return <GiftList dataGif={transformResponseData(data)} />;
    } else return <div>{`По запросу "${searchParam}" результатов поиска нет`}</div>;
  }

  return <div>Что-то пошло не так!</div>;
};
