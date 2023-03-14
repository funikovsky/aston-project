import axios, { AxiosResponse } from 'axios';
import { apiMain } from './config';
import { ApiResponseGif, ApiResponseGifs } from './types';
import { _apiKey, _limit, _offSet } from '../common/variables';

const getGifTrendingList = async (offSet: string) => {
  const res: AxiosResponse<ApiResponseGifs> = await apiMain.get(
    `trending?${_apiKey}&limit=${_limit}&offset=${offSet}&rating=g`,
  );

  return res.data;
};

const getSearchGifList = async (searchParam: string) => {
  const res: AxiosResponse<ApiResponseGifs> = await apiMain.get(
    `search?${_apiKey}&q=${searchParam}&limit=25&offset=0&rating=g&lang=en`,
  );

  return res.data;
};
const getGifById = async (id: string) => {
  const res: AxiosResponse<ApiResponseGif> = await apiMain.get(`${id}?${_apiKey}`);

  return res.data;
};

const getGifsByIds = async (ids: Array<string>) => {
  const idsToString = ids.join('%2C+');

  const res: AxiosResponse<ApiResponseGifs> = await axios.get(
    `https://api.giphy.com/v1/gifs?${_apiKey}&ids=${idsToString}`,
  );

  return res.data;
};

export const Api = {
  getGifTrendingList,
  getSearchGifList,
  getGifById,
  getGifsByIds,
};
