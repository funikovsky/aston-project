import { CSSProperties } from 'react';
import DotLoader from 'react-spinners/RingLoader';

import styles from './Spinner.module.scss';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <DotLoader color={'#5022b1'} loading={true} cssOverride={override} size={150} />
    </div>
  );
};
