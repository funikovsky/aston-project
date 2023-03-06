import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../AuthForm/AuthForm';
import { setUser } from '../../redux/slice/authSlice';
import { useLoginAndSignHook } from '../../hooks/useLoginAndSignHook';
import { useAppSelector } from '../../hooks/useAppHooks';
import { addUserToDataBase } from '../../redux/slice/dataBaseSlice';

export const SignUp = () => {
  const { dispatch, navigate, firebaseError, setFireBaseError } = useLoginAndSignHook();
  const dataBase = useAppSelector((state) => state.dataBase.dataBase);
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch((err) => {
        setFireBaseError(err.code);
      });
  };
  return (
    <div>
      <AuthForm title="REGISTRATION" error={firebaseError} handleClick={handleRegister} />
    </div>
  );
};
