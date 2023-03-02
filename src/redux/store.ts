import { combineReducers, configureStore } from '@reduxjs/toolkit';
import projectSlice from './slice/projectSlice';
import authSlice from './slice/authSlice';

const rootReducer = combineReducers({
  project: projectSlice,
  authSlice: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
