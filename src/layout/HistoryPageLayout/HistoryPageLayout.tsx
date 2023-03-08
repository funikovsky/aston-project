import { Outlet } from 'react-router-dom';
import { SearchParamList } from '../../components/SearchParamList/SearchParamList';

import styles from './HistoryPageLayout.module.scss';

export const HistoryPageLayout = () => {
  return (
    <div>
      <h2 className={styles.title}>ИСТОРИЯ ПАРАМЕТРОВ ПОИСКА:</h2>
      <SearchParamList />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
