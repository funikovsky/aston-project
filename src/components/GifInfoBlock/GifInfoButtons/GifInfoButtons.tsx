import { Button } from '../../Button/Button';

interface Props {
  removeGif: () => void;
  addGif: () => void;
  isGif: boolean;
}

export const GifInfoButtons = ({ removeGif, addGif, isGif }: Props) => {
  return isGif ? (
    <Button onClick={removeGif}>Удалить из избранного</Button>
  ) : (
    <Button onClick={addGif}>Добавить в избранное</Button>
  );
};
