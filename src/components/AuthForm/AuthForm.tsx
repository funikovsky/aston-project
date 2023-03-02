import { FirebaseError } from '../FirebaseError/FirebaseError';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../Input/Input';

import styles from './AuthForm.module.scss';
import { Button } from '../Button/Button';

type Inputs = {
  email: string;
  password: string;
};
interface Props {
  title: string;
  error: string | null;
  handleClick: (email: string, password: string) => void;
}
export const AuthForm = ({ title, error, handleClick }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    handleClick(email, password);
    reset();
  };

  return (
    <div className={styles.form}>
      <h2>{title}</h2>
      {error && <FirebaseError error={error} />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', {
            required: 'Обязательное поле',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некоректный E-mail',
            },
          })}
          placeholder="Введите e-mail"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Input
          {...register('password', {
            required: 'Обязательное поле',
            minLength: {
              value: 6,
              message: 'Минимум 6 символов',
            },
          })}
          placeholder="Введите пароль"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button>Отправить</Button>
      </form>
    </div>
  );
};
