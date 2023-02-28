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

const getSearchGifList = async (searchParam: string) => {
  const res: AxiosResponse<ApiResponse> = await apiMain.get(
    `search?${_apiKey}&q=${searchParam}&limit=25&offset=0&rating=g&lang=en`,
  );

  return res.data;
};

export const Api = {
  getGifTrendingList,
  getSearchGifList,
};
