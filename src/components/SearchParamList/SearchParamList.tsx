import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppHooks';
import { useAuth } from '../../hooks/useAuth';
import { removeHistory } from '../../redux/slice/dataBaseSlice';
import { dataBaseSelector } from '../../redux/slice/selectors/dataBaseSelectors';
import { Button } from '../Button/Button';
import { FlexBlock } from '../FlexBlock/FlexBLock';
import { SearchParamItem } from './SearchParamItem/SearchParamItem';

import styles from './SearchParamList.module.scss';

export const SearchParamList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const removeUserHistory = (userId: string) => {
    dispatch(removeHistory(userId));
    navigate('/history');
  };
  const { idOfCurrentUser } = useAuth();
  if (idOfCurrentUser) {
    const dataBase = useAppSelector(dataBaseSelector);
    let searchHistoryOfUser = dataBase[idOfCurrentUser].history;

    return (
      <>
        {!!searchHistoryOfUser.length && (
          <Button onClick={() => removeUserHistory(idOfCurrentUser)}> Очистить историю</Button>
        )}
        <FlexBlock className={styles.paramBlock} jc="center">
          {!searchHistoryOfUser.length && <h2>На данный момент нет записей об истории запросов</h2>}
          {searchHistoryOfUser.map((searchParam, index) => (
            <SearchParamItem key={index} searchParamName={searchParam} />
          ))}
        </FlexBlock>
      </>
    );
  }

  return <h2>Для просмотра истории авторизуйтесь</h2>;
};
