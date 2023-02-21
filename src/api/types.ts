export interface GifResponseItem {
  id: string;
  images: {
    preview_webp: {
      url: string;
    };
  };
}

export type GifItemList = Array<GifResponseItem>;

export interface ApiResponse {
  data: GifItemList;
}
