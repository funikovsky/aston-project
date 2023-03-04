import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../../../api/api';
import { transformGif } from '../../../utils/utils';
import { GifItem } from '../../../common/types';

interface ThunkArg {
  id?: string;
}

export const getGifByIdThunk = createAsyncThunk<GifItem, ThunkArg['id'], { rejectValue: string }>(
  'project/getGifByIdThunk',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await Api.getGifById(id);

      const transformData: GifItem = transformGif(data);

      return transformData;
    } catch (error: any) {
      return rejectWithValue(`Ошибка загрузки данных: ${error?.response?.status || 500}`);
    }
  },
);
