import { RootState } from '../store'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'

import { BASE_URL } from '../../utils/constants'

export const fetchCategories = createAsyncThunk<ICategories[]>(
  'categories/fetchCategories',
  async () => {
    const { data } = await axios.get<ICategories[]>(`${BASE_URL}/categories`)
    return data
  }
)

export interface ICategories {
  id: number
  name: string
  image: string
}
export enum Status {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
interface ICategoriesState {
  categories: ICategories[]
  status: Status
}
const initialState: ICategoriesState = {
  categories: [],
  status: Status.LOADING,
}
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = Status.LOADING
    }),
      builder.addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<ICategories[]>) => {
          state.categories = action.payload
          state.status = Status.SUCCESS
        }
      ),
      builder.addCase(fetchCategories.rejected, (state) => {
        state.status = Status.ERROR
      })
  },
})

export const selectCategories = (state: RootState) => state.categoriesSlice
export default categoriesSlice.reducer
