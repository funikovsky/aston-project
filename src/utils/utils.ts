import { GifResponseItem } from '../api/types';

export const transformGif = (gifResponseItem: GifResponseItem) => ({
  id: gifResponseItem.id,
  username: gifResponseItem.username,
  title: gifResponseItem.title,
  import_datetime: gifResponseItem.import_datetime,
  url: gifResponseItem.images.preview_webp?.url,
});
