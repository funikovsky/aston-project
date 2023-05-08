import { Button } from '../../Button/Button';

interface Props {
  removeGif: () => void;
  addGif: () => void;
  isGifInFavorits: boolean;
}

export const GifInfoButtons = ({ removeGif, addGif, isGifInFavorits }: Props) => {
  return isGifInFavorits ? (
    <Button onClick={removeGif}>Удалить из избранного</Button>
  ) : (
    <Button onClick={addGif}>Добавить в избранное</Button>
  );
};
