import { Link } from 'react-router-dom';

export const UserRegistration = () => {
  return (
    <>
      <Link to="/login"> Войти </Link>
      <Link to="/registration"> Регистрация</Link>
    </>
  );
};
