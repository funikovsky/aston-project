import { ErrorEnum } from '../../common/types';

interface Props {
  error: string | null;
}

export const FirebaseError = ({ error }: Props) => {
  if (error === ErrorEnum.userAlreadyUse) return <h3>Данный email уже зарегистрирован</h3>;
  if (error === ErrorEnum.serverError) return <h3>Ошибка сервера</h3>;
  if (error === (ErrorEnum.userNotFound || ErrorEnum.passwordWrong))
    return <h3> Неверный логин или пароль</h3>;
  else return <h3>Что-то пошло не так!!!</h3>;
};
