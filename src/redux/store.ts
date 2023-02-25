import { combineReducers, configureStore } from '@reduxjs/toolkit';
import projectSlice from './slice/projectSlice';

const rootReducer = combineReducers({
  project: projectSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
