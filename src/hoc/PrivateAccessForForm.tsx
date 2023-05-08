import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface Props {
  children: JSX.Element;
}

export const PrivateAccessForForm = ({ children }: Props) => {
  const { idOfCurrentUser } = useAuth();

  if (idOfCurrentUser) {
    return <Navigate to="/" />;
  }
  return children;
};
