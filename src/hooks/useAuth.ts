import { useAppSelector } from './useAppHooks';

export const useAuth = () => {
  const { email, id } = useAppSelector((state) => state.authSlice);

  return {
    isAuth: !!email,
    email,
    id,
  };
};
