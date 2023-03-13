import { FlexBlock } from '../components/FlexBlock/FlexBLock';
import { GiftList } from '../components/GifList';
import { useAppSelector } from '../hooks/useAppHooks';
import { dataGifsAfterSearchSelector } from '../redux/slice/selectors/dataGifsSelectors';

export const FoundGifsPage = () => {
  const dataFoundGifs = useAppSelector(dataGifsAfterSearchSelector);

  return (
    <>
      {dataFoundGifs.length ? (
        <GiftList dataGif={dataFoundGifs} />
      ) : (
        <FlexBlock jc="center">
          <span>
            На данный момент результатов поиска нет, попробуйте ввести либо изменить ранее введенные
            параметры.
          </span>
        </FlexBlock>
      )}
    </>
  );
};
