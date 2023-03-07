import { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppHooks';
import { useAuth } from '../../hooks/useAuth';

import { getSearchGifs } from '../../redux/slice/asyncThunks/getSearchGifThunk';
import { addSearchParamToHistory } from '../../redux/slice/dataBaseSlice';
import { Button } from '../Button/Button';
import { FlexBlock } from '../FlexBlock/FlexBLock';
import { Input } from '../Input/Input';

import styles from './SearchBlock.module.scss';

export const SearchBlock = () => {
  const [searchValue, setSearchValue] = useState('');
  const { idOfCurrentUser } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const runSearchHandleClick = (searchValue: string) => {
    if (!searchValue) return;
    dispatch(getSearchGifs(searchValue));

    if (idOfCurrentUser) {
      dispatch(addSearchParamToHistory({ idOfCurrentUser, searchValue }));
    }
    setSearchValue('');
    navigate('/search');
  };

  const inputSearchAfterKeyPress = (key: KeyboardEvent) => {
    if (key.key === 'Enter') runSearchHandleClick(searchValue);
  };

  return (
    <FlexBlock jc="center" className={styles.container}>
      <Input
        placeholder="Начните поиск "
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(key: KeyboardEvent) => inputSearchAfterKeyPress(key)}
      />
      <Button onClick={() => runSearchHandleClick(searchValue)}>Поиск</Button>
    </FlexBlock>
  );
};
