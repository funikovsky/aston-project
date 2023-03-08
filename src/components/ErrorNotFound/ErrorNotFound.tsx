import { NotFoundIcon } from './NotFoundIcon/NotFoundIcon';

import styles from './ErrorNotFound.module.scss';

export const ErrorNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Страница не найдена</h2>
      <div className={styles.container}>
        <NotFoundIcon />
      </div>
    </div>
  );
};
