import { BASE_URL } from '../../utils/constants'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { RootState } from '../store'
import { shuffle } from '../../utils/common'

export const fetchProducts = createAsyncThunk<IProducts[]>(
  'products/fetchProducts',
  async () => {
    const { data } = await axios.get<IProducts[]>(`${BASE_URL}/products`)
    return data
  }
)

export interface IProducts {
  id: number
  title: string
  price: number
  description: string
  category: {
    id: number
    name: string
    image: string
  }
  images: string[]
}
export enum Status {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
interface IProductsState {
  products: IProducts[]
  status: Status
  filtered: IProducts[]
  related: IProducts[]
}

const initialState: IProductsState = {
  products: [],
  filtered: [],
  related: [],
  status: Status.LOADING,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByPrice: (state, action: PayloadAction<number>) => {
      const filteredList = [...state.products].filter(
        ({ price }) => price < action.payload
      )
      state.filtered = shuffle(filteredList)
    },
    relatedProducts: (state, action: PayloadAction<number>) => {
      const relatedList = [...state.products].filter(
        ({ category: { id } }) => id === action.payload
      )
      state.related = shuffle(relatedList)
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<IProducts[]>) => {
        state.products = action.payload
        state.status = Status.SUCCESS
      }
    )
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const selectProducts = (state: RootState) => state.productsSlice
export const { filterByPrice, relatedProducts } = productsSlice.actions
export default productsSlice.reducer
