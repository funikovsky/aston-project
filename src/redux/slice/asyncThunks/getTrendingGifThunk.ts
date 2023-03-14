import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../../../api/api';
import { transformGif } from '../../../utils/utils';
import { GifItem } from '../../../common/types';
import { _offSet } from '../../../common/variables';

interface ThunkArg {
  offSet: string;
}

export const getTrendingGifs = createAsyncThunk<
  Array<GifItem>,
  ThunkArg['offSet'],
  { rejectValue: string }
>('project/getTrendingGifs', async (offSet, { rejectWithValue }) => {
  try {
    const { data } = await Api.getGifTrendingList(offSet);

    const transformData: Array<GifItem> = data.map(transformGif);

    return transformData;
  } catch (error: any) {
    return rejectWithValue(`Ошибка загрузки данных: ${error?.response?.status || 500}`);
  }
});
