import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'

export interface ICartItem {
  id: number
  title: string
  price: number
  count: number
  images: string[]
  category: { name: string }
}
export enum Status {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
interface ICartItemState {
  cart: ICartItem[]
  status: Status
}

const initialState: ICartItemState = {
  cart: [],
  status: Status.LOADING,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }: PayloadAction<ICartItem>) => {
      const itemExists = state.cart.some(({ id }) => id === payload.id)
      if (itemExists) {
        state.cart = state.cart.map((item) =>
          item.id === payload.id ? { ...item, count: payload.count + 1 } : item
        )
      } else {
        state.cart.push({
          ...payload,
          count: 1,
        })
      }
    },
    removeItemFromCart: (state, { payload }: PayloadAction<number>) => {
      const findItem = state.cart.find(({ id }) => id === payload)

      if (findItem && findItem.count > 1) {
        findItem.count -= 1
      }
    },
    deleteItemFromCart: (state, { payload }: PayloadAction<number>) => {
      state.cart = state.cart.filter(({ id }) => id !== payload)
    },
  },
})

export const selectCart = (state: RootState) => state.cartSlice
export const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
  cartSlice.actions
export default cartSlice.reducer
