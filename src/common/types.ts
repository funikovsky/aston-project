export interface GifItem {
  id: string;
  username: string;
  title: string;
  import_datetime: string;
  url: string;
}

export enum ErrorEnum {
  userAlreadyUse = 'auth/email-already-in-use',
  serverError = 'auth/internal-error',
  userNotFound = 'auth/user-not-found',
  passwordWrong = 'auth/wrong-password',
}

export interface SearchingItem {
  searchValue: string;
  dataOfSearch: string;
}

export interface DataBase {
  [key: string]: {
    history: Array<SearchingItem>;
    favoritsId: Array<string>;
    dataFavoritsGif: Array<GifItem>;
  };
}

export type Status = 'loading' | 'error' | 'fulfilled';
