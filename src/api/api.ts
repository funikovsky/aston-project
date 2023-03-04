import { AxiosResponse } from 'axios';
import { apiMain } from './config';
import { ApiResponseGif, ApiResponseGifs } from './types';
import { _apiKey, _offSet } from '../common/variables';

const getGifTrendingList = async (offSet: string = _offSet) => {
  const res: AxiosResponse<ApiResponseGifs> = await apiMain.get(
    `trending?${_apiKey}&limit=25&offset=${offSet}&rating=g`,
  );

  return res.data;
};

const getSearchGifList = async (searchParam: string) => {
  const res: AxiosResponse<ApiResponseGifs> = await apiMain.get(
    `search?${_apiKey}&q=${searchParam}&limit=25&offset=0&rating=g&lang=en`,
  );

  return res.data;
};
const getGifById = async (id: string | undefined) => {
  const res: AxiosResponse<ApiResponseGif> = await apiMain.get(`${id}?${_apiKey}`);

  return res.data;
};
export const Api = {
  getGifTrendingList,
  getSearchGifList,
  getGifById,
};
