import { useEffect } from 'react';
import { Outlet, useMatch } from 'react-router-dom';

import { CustomLink } from '../components/CustomLink/CustomLink';
import { SearchBlock } from '../components/SearchBlock/SearchBlock';
import { UserEnterBlock } from '../components/UserEnterBlock/UserEnterBlock';
import { useAppDispatch } from '../hooks/useAppHooks';
import { useAuth } from '../hooks/useAuth';
import { getTrendingGifs } from '../redux/slice/asyncThunks/getTrendingGifThunk';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  const match = useMatch('/');
  const dispatch = useAppDispatch();
  const { email, isAuth } = useAuth();
  useEffect(() => {
    dispatch(getTrendingGifs());
  }, []);

  return (
    <div className={styles.wrapper}>
      {!match && (
        <CustomLink className={styles.tag} href="/">
          На главную
        </CustomLink>
      )}
      <h1 className={styles.title}>GIF BASE</h1>
      <UserEnterBlock isAuth={isAuth} email={email} />
      <SearchBlock />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
