import { AxiosResponse } from 'axios';
import { apiMain } from './config';
import { ApiResponse } from './types';
import { _apiKey, _offSet } from '../common/variables';

const getGifTrendingList = async (offSet: string = _offSet) => {
  const res: AxiosResponse<ApiResponse> = await apiMain.get(
    `trending?${_apiKey}&limit=25&offset=${offSet}&rating=g`,
  );

  return res.data;
};

export const Api = {
  getGifTrendingList,
};
