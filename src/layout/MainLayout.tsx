import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../hooks/useAppHooks';
import { useAuth } from '../hooks/useAuth';
import { toggleChecked, toggleTheme } from '../redux/slice/themeSlice';

import { FlexBlock } from '../components/FlexBlock/FlexBLock';
import { SearchBlock } from '../components/SearchBlock/SearchBlock';
import { Switch } from '../components/Switch/Switch';
import { UserEnterBlock } from '../components/UserEnterBlock/UserEnterBlock';
import { getTrendingGifs } from '../redux/slice/asyncThunks/getTrendingGifThunk';

import styles from './MainLayout.module.scss';
import { Button } from '../components/Button/Button';

export const MainLayout = () => {
  const offSet = useAppSelector((state) => state.project.offSet);
  const dataTheme = useAppSelector((state) => state.themeSlice);
  const navigate = useNavigate();
  const { checked, theme } = dataTheme;

  const dispatch = useAppDispatch();
  const { email, isAuth } = useAuth();

  const handleOnChangeSwitch = () => {
    dispatch(toggleTheme());
    dispatch(toggleChecked());
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getTrendingGifs(offSet));
  }, [offSet]);

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.dark]: theme === 'dark',
      })}>
      <FlexBlock className={styles.header}>
        <FlexBlock className={styles.btnblock}>
          <Button className={styles.tag} onClick={goBack}>
            {'<- Назад'}
          </Button>
          <Switch checked={checked} onChange={handleOnChangeSwitch} />
        </FlexBlock>
        <div className={styles.title}>
          <Link to="/">GIFS</Link>
        </div>
        <UserEnterBlock isAuth={isAuth} email={email} />
      </FlexBlock>
      <SearchBlock />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};
