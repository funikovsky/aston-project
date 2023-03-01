import { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppHooks';

import { getSearchGifs } from '../../redux/slice/asyncThunks/getSearchGifThunk';
import { Button } from '../Button/Button';
import { FlexBlock } from '../FlexBlock/FlexBLock';
import { Input } from '../Input/Input';

export const SearchBlock = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const runSearchHandleClick = (searchValue: string) => {
    if (!searchValue) return;
    dispatch(getSearchGifs(searchValue));
    setSearchValue('');
    navigate('/search');
  };

  const inputSearchAfterKeyPress = (key: KeyboardEvent) => {
    if (key.code === 'Enter') runSearchHandleClick(searchValue);
  };

  return (
    <FlexBlock jc="center">
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
