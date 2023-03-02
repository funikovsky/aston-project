export interface GifItem {
  id: string;
  url: string;
}

export enum ErrorEnum {
  userAlreadyUse = 'auth/email-already-in-use',
  serverError = 'auth/internal-error',
  userNotFound = 'auth/user-not-found',
  passwordWrong = 'auth/wrong-password',
}
