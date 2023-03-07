import { ApiResponseGifs, GifResponseItem } from '../api/types';

export const transformGif = (gifResponseItem: GifResponseItem) => ({
  id: gifResponseItem.id,
  username: gifResponseItem.username,
  title: gifResponseItem.title,
  import_datetime: gifResponseItem.import_datetime,
  url: gifResponseItem.images.preview_webp?.url,
});

export const transformResponseData = (data: ApiResponseGifs) => {
  return data.data.map(transformGif);
};

export const transformSetToArray = (arr: Set<string>) => {
  return Array.from(arr);
};
