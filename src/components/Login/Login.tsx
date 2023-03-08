import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../AuthForm/AuthForm';
import { setUser } from '../../redux/slice/authSlice';
import { useLoginAndSignHook } from '../../hooks/useLoginAndSignHook';
import { useAppSelector } from '../../hooks/useAppHooks';
import { addUserToDataBase } from '../../redux/slice/dataBaseSlice';

export const Login = () => {
  const { dispatch, navigate, firebaseError, setFireBaseError } = useLoginAndSignHook();
  const dataBase = useAppSelector((state) => state.dataBase.dataBase);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            idOfCurrentUser: user.uid,
          }),
        );
        if (!dataBase[user.uid]) {
          dispatch(addUserToDataBase(user.uid));
        }
        navigate('/');
      })
      .catch((err) => setFireBaseError(err.code));
  };
  return (
    <div>
      <AuthForm title="LOGIN" error={firebaseError} handleClick={handleLogin} />
    </div>
  );
};
