import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utils/constants'
import { IProducts } from '../Products/productsSlice'
import { buildUrl } from '../../utils/common'


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ['Product'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProducts, string>({
      query: (id) => `/products/${id}`,
      providesTags: ['Product'],
    }),
    getProducts: builder.query<IProducts[], Record<string, string | number>>({ 
      query: (params) => buildUrl('/products', params),
      providesTags: ['Product'],
    }),
  }),
})

export const { useGetProductQuery, useGetProductsQuery } = apiSlice
