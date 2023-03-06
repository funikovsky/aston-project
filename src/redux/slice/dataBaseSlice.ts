import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { DataBase } from '../../common/types';
import { getGifsByIdsThunk } from './asyncThunks/getGifsByIdsThunk';

interface InitialStateInterface {
  dataBase: DataBase;
}

interface AddfavoritsIdProps {
  userId: string;
  gifId: string;
}

const initialState: InitialStateInterface = {
  dataBase: {},
};

export const DataBaseSlice = createSlice({
  name: 'dataBase',
  initialState,
  reducers: {
    addUserToDataBase: (state, action: PayloadAction<string>) => {
      state.dataBase[action.payload] = {
        history: [],
        favoritsId: [],
        dataFavoritsGif: [],
      };
    },
    addFavoritsId: (state, action: PayloadAction<AddfavoritsIdProps>) => {
      state.dataBase[action.payload.userId].favoritsId = Array.from(
        new Set(state.dataBase[action.payload.userId].favoritsId).add(action.payload.gifId),
      );
    },
    removeFavoritsId: (state, action: PayloadAction<AddfavoritsIdProps>) => {
      const userId = action.payload.userId;
      const gifId = action.payload.gifId;
      const userDataBase = state.dataBase[userId];
      const set = new Set(userDataBase.favoritsId);
      set.delete(gifId);
      userDataBase.favoritsId = Array.from(set);
      if (userDataBase.favoritsId.length === 0) userDataBase.dataFavoritsGif = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getGifsByIdsThunk.pending), (state, action) => {
        console.log(action.type);
      })
      .addMatcher(isAnyOf(getGifsByIdsThunk.fulfilled), (state, action) => {
        state.dataBase[action.payload.userId].dataFavoritsGif = [...action.payload.transformData];
      })
      .addMatcher(isAnyOf(getGifsByIdsThunk.rejected), (state, action) => {
        console.error(action.type);
      });
  },
});

export const { addUserToDataBase, addFavoritsId, removeFavoritsId } = DataBaseSlice.actions;
export default DataBaseSlice.reducer;