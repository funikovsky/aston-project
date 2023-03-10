export const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  let data = new Date().toString();

  if (action.type === 'authSlice/setUser') {
    console.groupCollapsed('Вход в приложение:');
    console.log('1.', data);
    console.log('2. Вход под ником:', action.payload.email);
    console.log('3. state', store.getState());
    console.groupEnd();
  }
  if (action.type === 'authSlice/removeUser') {
    let user = store.getState().authSlice.email;
    console.groupCollapsed('Выход из приложения:');
    console.log('1.', data.toString());
    console.log('2. Вышел пользователь:', user);
    console.log('3. state', store.getState());
    console.groupEnd();
  }

  return next(action);
};
