import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import categoriesSlice from './Categories/categoriesSlice'
import productsSlice from './Products/productsSlice'
import cartSlice from "./Cart/cartSlice";

import { apiSlice } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    categoriesSlice,
    productsSlice,
    cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer, //или можно ипортировать как слайсы выше
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
