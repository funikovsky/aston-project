import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getTrendingGifs } from './asyncThunks/getTrendingGifThunk';
import { getSearchGifs } from './asyncThunks/getSearchGifThunk';
import { GifItem } from '../../common/types';

interface InitialStateInterface {
  dataTrendingGifs: Array<GifItem>;
  dataGifsAfterSearch: Array<GifItem>;
}

const initialState: InitialStateInterface = {
  dataTrendingGifs: [],
  dataGifsAfterSearch: [],
};

export const ProjectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getTrendingGifs.pending), (state, action) => {})
      .addMatcher(isAnyOf(getTrendingGifs.fulfilled), (state, action) => {
        state.dataTrendingGifs = [...action.payload];
      })
      .addMatcher(isAnyOf(getTrendingGifs.rejected), (state, action) => {
        console.log('rejected');
      })
      .addMatcher(isAnyOf(getSearchGifs.pending), (state, action) => {})
      .addMatcher(isAnyOf(getSearchGifs.fulfilled), (state, action) => {
        state.dataGifsAfterSearch = [...action.payload];
      })
      .addMatcher(isAnyOf(getSearchGifs.rejected), (state, action) => {
        console.log('rejected');
      });
  },
});

export const {} = ProjectSlice.actions;
export default ProjectSlice.reducer;
