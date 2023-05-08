import { useAppSelector } from './useAppHooks';

export const useAuth = () => {
  const { email, idOfCurrentUser } = useAppSelector((state) => state.authSlice);

  return {
    isAuth: !!email,
    email,
    idOfCurrentUser,
  };
};
