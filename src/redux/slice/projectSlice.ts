import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { getTrendingGifs, GifItem } from './asyncThunks/getTrendingGifThunk';

interface InitialStateInterface {
  dataTrendingGif: Array<GifItem>;
}

const initialState: InitialStateInterface = {
  dataTrendingGif: [],
};

export const ProjectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getTrendingGifs.pending), (state, action) => {})
      .addMatcher(isAnyOf(getTrendingGifs.fulfilled), (state, action) => {
        state.dataTrendingGif = [...action.payload];
      })
      .addMatcher(isAnyOf(getTrendingGifs.rejected), (state, action) => {
        console.log('rejected');
      });
  },
});

export const {} = ProjectSlice.actions;
export default ProjectSlice.reducer;
