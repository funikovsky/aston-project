import { useAppDispatch } from '../../hooks/useAppHooks';
import { removeUser } from '../../redux/slice/authSlice';
import { FlexBlock } from '../FlexBlock/FlexBLock';
import { UserInfo } from './UserInfo/UserInfo';
import { UserRegistration } from './UserRegistration/UserRegistaration';

import styles from './UserEnterBlock.module.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
  isAuth: boolean;
  email: string | null;
}

export const UserEnterBlock = ({ isAuth, email }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRemoveUser = () => {
    dispatch(removeUser());
    navigate('/');
  };
  return (
    <FlexBlock jc="end" cgap20 className={styles.container}>
      {isAuth ? <UserInfo email={email} handleClick={handleRemoveUser} /> : <UserRegistration />}
    </FlexBlock>
  );
};
