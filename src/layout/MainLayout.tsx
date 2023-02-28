import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { SearchBlock } from '../components/SearchBlock/SearchBlock';
import { useAppDispatch } from '../hooks/useAppHooks';
import { getTrendingGifs } from '../redux/slice/asyncThunks/getTrendingGifThunk';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTrendingGifs());
  }, []);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>GIF BASE</h1>
      <SearchBlock />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
