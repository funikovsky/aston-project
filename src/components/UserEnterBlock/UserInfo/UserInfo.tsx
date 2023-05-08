import { Button } from '../../Button/Button';
import { CustomLink } from '../../CustomLink/CustomLink';
import { FlexBlock } from '../../FlexBlock/FlexBLock';

import styles from './UserInfo.module.scss';

interface Props {
  email: string | null;
  handleClick: () => void;
}

export const UserInfo = ({ email, handleClick }: Props) => {
  return (
    <div>
      <span>Вы вошли как {email} </span>
      <FlexBlock className={styles.btnblock}>
        <CustomLink href={'/favorits'}>Избранное</CustomLink>
        <CustomLink href={'./history'}>История</CustomLink>
        <Button onClick={handleClick}>Выйти</Button>
      </FlexBlock>
    </div>
  );
};
