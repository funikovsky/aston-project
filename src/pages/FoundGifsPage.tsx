import { useNavigate } from 'react-router-dom';

import { Button } from '../components/Button/Button';
import { FlexBlock } from '../components/FlexBlock/FlexBLock';
import { GiftList } from '../components/GifList';
import { useAppSelector } from '../hooks/useAppHooks';

export const FoundGifsPage = () => {
  const navigate = useNavigate();
  const dataFoundGifs = useAppSelector((state) => state.project.dataGifsAfterSearch);

  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <>
      <FlexBlock jc="center">
        <Button onClick={goToMainPage}>На главную</Button>
      </FlexBlock>

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
