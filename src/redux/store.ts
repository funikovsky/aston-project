import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import projectSlice from './slice/projectSlice';
import authSlice from './slice/authSlice';
import dataBaseSlice from './slice/dataBaseSlice';
import { searchGifsApi } from './query/searchGifsQuery';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  project: projectSlice,
  authSlice: authSlice,
  dataBase: dataBaseSlice,
  [searchGifsApi.reducerPath]: searchGifsApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['project'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(searchGifsApi.middleware),
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
