import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const dataBase = (state: RootState) => state.dataBase.dataBase;

export const dataBaseSelector = createSelector(dataBase, (data) => data);
