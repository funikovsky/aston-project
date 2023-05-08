import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../../../api/api';
import { transformGif } from '../../../utils/utils';
import { GifItem } from '../../../common/types';

interface ThunkArg {
  searchParam: string;
}

export const getSearchGifs = createAsyncThunk<
  Array<GifItem>,
  ThunkArg['searchParam'],
  { rejectValue: string }
>('project/getSearchGifs', async (searchParam, { rejectWithValue }) => {
  try {
    const { data } = await Api.getSearchGifList(searchParam);

    const transformData: Array<GifItem> = data.map(transformGif);

    return transformData;
  } catch (error: any) {
    return rejectWithValue(`Ошибка загрузки данных: ${error?.response?.status || 500}`);
  }
});
