import { ICartItem } from '../services/Cart/cartSlice'

export const shuffle = <T>(arr: T[]): T[] =>
  [...arr].sort(() => Math.random() - 0.5)

export const buildUrl = (
  url: string,
  params: Record<string, string | number>
): string => {
  let urlWitsParams = url

  Object.entries(params).forEach(([key, value], i) => {
    const sign = !i ? '?' : '&'
    urlWitsParams += `${sign}${key}=${value}`
  })

  return urlWitsParams
}

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export const handleLoadMore = <
  T extends {
    limit: number
    offset: number
  }
>(
  setParams: SetState<T>,
  params: T
): void => {
  setParams((prevState: T) => ({
    ...prevState,
    offset: params.offset + params.limit,
  }))
}

export const sumBy = (arr: ICartItem[]): number =>
  arr.reduce((sum, item) => sum + item.price, 0)
