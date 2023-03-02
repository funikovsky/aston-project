import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from './useAppHooks';

export const useLoginAndSignHook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [firebaseError, setFireBaseError] = useState<string | null>(null);

  return {
    dispatch,
    navigate,
    firebaseError,
    setFireBaseError,
  };
};
