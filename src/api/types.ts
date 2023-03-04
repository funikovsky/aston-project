export interface GifResponseItem {
  id: string;
  username: string;
  title: string;
  import_datetime: string;
  images: {
    preview_webp: {
      url: string;
    };
  };
}

export type GifItemList = Array<GifResponseItem>;

export interface ApiResponseGifs {
  data: GifItemList;
}
export interface ApiResponseGif {
  data: GifResponseItem;
}
