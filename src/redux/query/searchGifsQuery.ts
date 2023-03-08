import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponseGifs } from '../../api/types';
import { GifItem } from '../../common/types';

import { _apiKey } from '../../common/variables';
import { transformResponseData } from '../../utils/utils';

export const searchGifsApi = createApi({
  reducerPath: 'searchGifsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.giphy.com/v1/gifs/` }),
  endpoints: (builder) => ({
    getGifsBySearchParam: builder.query<Array<GifItem>, string>({
      query: (searchParam) =>
        `search?${_apiKey}&q=${searchParam}&limit=25&offset=0&rating=g&lang=en`,
      transformResponse: (rawResult: ApiResponseGifs, meta) => {
        return transformResponseData(rawResult);
      },
    }),
  }),
});

export const { useGetGifsBySearchParamQuery } = searchGifsApi;
