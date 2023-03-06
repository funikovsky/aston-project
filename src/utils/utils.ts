import { GifResponseItem } from '../api/types';
import { DataBase } from '../common/types';

export const transformGif = (gifResponseItem: GifResponseItem) => ({
  id: gifResponseItem.id,
  username: gifResponseItem.username,
  title: gifResponseItem.title,
  import_datetime: gifResponseItem.import_datetime,
  url: gifResponseItem.images.preview_webp?.url,
});

export const transformSetToArray = (arr: Set<string>) => {
  return Array.from(arr);
};
