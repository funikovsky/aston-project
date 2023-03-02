import { useAppDispatch } from '../../hooks/useAppHooks';
import { removeUser } from '../../redux/slice/authSlice';
import { FlexBlock } from '../FlexBlock/FlexBLock';
import { UserInfo } from './UserInfo/UserInfo';
import { UserRegistration } from './UserRegistration/UserRegistaration';

interface Props {
  isAuth: boolean;
  email: string | null;
}

export const UserEnterBlock = ({ isAuth, email }: Props) => {
  const dispatch = useAppDispatch();
  const handleRemoveUser = () => {
    dispatch(removeUser());
  };
  return (
    <FlexBlock jc="end" cgap20>
      {isAuth ? <UserInfo email={email} handleClick={handleRemoveUser} /> : <UserRegistration />}
    </FlexBlock>
  );
};
