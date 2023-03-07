import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponseGifs } from '../../api/types';

import { _apiKey } from '../../common/variables';

export const searchGifsApi = createApi({
  reducerPath: 'searchGifsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.giphy.com/v1/gifs/` }),
  endpoints: (builder) => ({
    getGifsBySearchParam: builder.query<ApiResponseGifs, string>({
      query: (searchParam) =>
        `search?${_apiKey}&q=${searchParam}&limit=25&offset=0&rating=g&lang=en`,
    }),
  }),
});

export const { useGetGifsBySearchParamQuery } = searchGifsApi;
