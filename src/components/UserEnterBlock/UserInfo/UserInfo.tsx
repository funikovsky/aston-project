import { Button } from '../../Button/Button';
import { CustomLink } from '../../CustomLink/CustomLink';

interface Props {
  email: string | null;
  handleClick: () => void;
}

export const UserInfo = ({ email, handleClick }: Props) => {
  return (
    <div>
      <span>Вы вошли как {email} </span>
      <div>
        <CustomLink href={'/favorits'}>Избранное</CustomLink>
        <Button onClick={handleClick}>Выйти</Button>
      </div>
    </div>
  );
};
