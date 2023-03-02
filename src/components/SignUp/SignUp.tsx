import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from '../AuthForm/AuthForm';
import { setUser } from '../../redux/slice/authSlice';
import { useLoginAndSignHook } from '../../hooks/useLoginAndSignHook';

export const SignUp = () => {
  const { dispatch, navigate, firebaseError, setFireBaseError } = useLoginAndSignHook();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          }),
        );
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
