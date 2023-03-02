import { Button } from '../../Button/Button';

interface Props {
  email: string | null;
  handleClick: () => void;
}

export const UserInfo = ({ email, handleClick }: Props) => {
  return (
    <div>
      <span>Вы вошли как {email} </span>
      <Button onClick={handleClick}>Выйти</Button>
    </div>
  );
};
