import { GifResponseItem } from '../api/types';

export const transformGif = (gifResponseItem: GifResponseItem) => ({
  id: gifResponseItem.id,
  url: gifResponseItem.images.preview_webp.url,
});
