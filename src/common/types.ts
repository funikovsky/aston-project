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
