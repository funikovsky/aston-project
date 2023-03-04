import { FlexBlock } from '../components/FlexBlock/FlexBLock';
import { GiftList } from '../components/GifList';
import { useAppSelector } from '../hooks/useAppHooks';

export const FoundGifsPage = () => {
  const dataFoundGifs = useAppSelector((state) => state.project.dataGifsAfterSearch);

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
