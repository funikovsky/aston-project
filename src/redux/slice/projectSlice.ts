import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getTrendingGifs } from './asyncThunks/getTrendingGifThunk';
import { getSearchGifs } from './asyncThunks/getSearchGifThunk';
import { GifItem } from '../../common/types';
import { getGifByIdThunk } from './asyncThunks/getGifById';
import { _limit, _offSet } from '../../common/variables';

interface InitialStateInterface {
  dataTrendingGifs: Array<GifItem>;
  dataGifsAfterSearch: Array<GifItem>;
  dataGifItem: GifItem | null;
  offSet: string;
}

const initialState: InitialStateInterface = {
  dataTrendingGifs: [],
  dataGifsAfterSearch: [],
  dataGifItem: null,
  offSet: _offSet,
};

export const ProjectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    removeDataGifItem: (state) => {
      state.dataGifItem = null;
    },
    increaseOffSet: (state) => {
      state.offSet = (+state.offSet + +_limit).toString();
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getTrendingGifs.pending), (state, action) => {
        console.log(action.type);
      })
      .addMatcher(isAnyOf(getTrendingGifs.fulfilled), (state, action) => {
        state.dataTrendingGifs = [...state.dataTrendingGifs, ...action.payload];
      })
      .addMatcher(isAnyOf(getTrendingGifs.rejected), (state, action) => {
        console.error(action.type);
      })
      .addMatcher(isAnyOf(getSearchGifs.pending), (state, action) => {
        console.log(action.type);
      })
      .addMatcher(isAnyOf(getSearchGifs.fulfilled), (state, action) => {
        state.dataGifsAfterSearch = [...action.payload];
      })
      .addMatcher(isAnyOf(getSearchGifs.rejected), (state, action) => {
        console.error(action.type);
      })
      .addMatcher(isAnyOf(getGifByIdThunk.pending), (state, action) => {
        console.log(action.type);
      })
      .addMatcher(isAnyOf(getGifByIdThunk.fulfilled), (state, action) => {
        state.dataGifItem = action.payload;
      })
      .addMatcher(isAnyOf(getGifByIdThunk.rejected), (state, action) => {
        console.error(action.type);
      });
  },
});

export const { removeDataGifItem, increaseOffSet } = ProjectSlice.actions;
export default ProjectSlice.reducer;
