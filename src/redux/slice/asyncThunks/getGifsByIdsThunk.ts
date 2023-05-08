import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../../../api/api';
import { transformGif } from '../../../utils/utils';
import { GifItem } from '../../../common/types';

interface ThunkArg {
  ids: Array<string>;
  userId: string;
}

interface ReturnData {
  transformData: Array<GifItem>;
  userId: string;
}

export const getGifsByIdsThunk = createAsyncThunk<ReturnData, ThunkArg, { rejectValue: string }>(
  'dataBase/getGifsByIds',
  async ({ ids, userId }, { rejectWithValue }) => {
    try {
      const { data } = await Api.getGifsByIds(ids);
      const transformData: Array<GifItem> = data.map(transformGif);

      return {
        transformData,
        userId,
      };
    } catch (error: any) {
      return rejectWithValue(`Ошибка загрузки данных: ${error?.response?.status || 500}`);
    }
  },
);
