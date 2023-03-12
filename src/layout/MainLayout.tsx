import { useContext, useEffect } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import cn from 'classnames';

import { CustomLink } from '../components/CustomLink/CustomLink';
import { FlexBlock } from '../components/FlexBlock/FlexBLock';
import { SearchBlock } from '../components/SearchBlock/SearchBlock';
import { Switch } from '../components/Switch/Switch';
import { UserEnterBlock } from '../components/UserEnterBlock/UserEnterBlock';
import { ThemeContext } from '../hoc/ThemeProvider';
import { useAppDispatch } from '../hooks/useAppHooks';
import { useAuth } from '../hooks/useAuth';
import { getTrendingGifs } from '../redux/slice/asyncThunks/getTrendingGifThunk';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  const match = useMatch('/');
  const dispatch = useAppDispatch();
  const { email, isAuth } = useAuth();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    dispatch(getTrendingGifs());
  }, []);

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.dark]: themeContext?.theme === 'dark',
      })}>
      <FlexBlock className={styles.header}>
        <FlexBlock className={styles.btnblock}>
          {!match && (
            <CustomLink className={styles.tag} href="/">
              На главную
            </CustomLink>
          )}
          <Switch onChange={themeContext?.toggleTheme} />
        </FlexBlock>
        <h1 className={styles.title}>GIFS</h1>
        <UserEnterBlock isAuth={isAuth} email={email} />
      </FlexBlock>
      <SearchBlock />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};
