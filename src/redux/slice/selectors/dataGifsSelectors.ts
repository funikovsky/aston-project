import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const dataTrendingGifs = (state: RootState) => state.project.dataTrendingGifs;
const dataGifsAfterSearch = (state: RootState) => state.project.dataGifsAfterSearch;
const dataGifItem = (state: RootState) => state.project.dataGifItem;

export const dataGifsOfTrendingSelector = createSelector(
  dataTrendingGifs,
  (trendingGifs) => trendingGifs,
);

export const dataGifsAfterSearchSelector = createSelector(
  dataGifsAfterSearch,
  (searchedGifs) => searchedGifs,
);
export const dataGifItemSelector = createSelector(dataGifItem, (gifItem) => gifItem);
