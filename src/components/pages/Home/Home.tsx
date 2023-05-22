import { FC, useEffect, useState } from 'react'

import { useGetProductsQuery } from '../../../services/api/apiSlice'

import { useAppDispatch } from '../../../services/store'
import { useSelector } from 'react-redux'

import {
  IProducts,
  fetchProducts,
  filterByPrice,
  selectProducts,
} from '../../../services/Products/productsSlice'

import { Poster, Banner, Button } from '../../../components'

import { Sidebar, Categories, Products } from '../../../components'

import { handleLoadMore } from '../../../utils/common'

import { violet } from '../../UI/Button/Button.module.scss'
import styles from './Home.module.scss'

type Params = {
  limit: number
  offset: number
}
export const productDefaults: Params = {
  limit: 10,
  offset: 0,
}

const Home: FC = () => {
  const dispatch = useAppDispatch()
  const { products, filtered } = useSelector(selectProducts)
  const [isEnd, setIsEnd] = useState(true)
  const [params, setParams] = useState(productDefaults)
  const { data, isLoading, isSuccess } = useGetProductsQuery(params)
  const [items, setItems] = useState<IProducts[]>([])

  useEffect(() => {
    setItems([])
  }, [])

  useEffect(() => {
    if (!items.length) return setIsEnd(false)
  }, [items])

  useEffect(() => {
    if (!data?.length) return setIsEnd(true)
    setItems((prevState) => [...prevState, ...data])
  }, [data])

  useEffect(() => {
    dispatch(fetchProducts())
    if (!products.length) return

    dispatch(filterByPrice(100))
    window.scrollTo(0, 0)
  }, [dispatch, products.length])

  return (
    <section className={styles.root}>
      <div className={styles.row}>
        <Sidebar />
        <Poster />
      </div>
      <div className={styles.products}>
        <Products title={'Trending'} amount={items.length} products={items} />
        {!isEnd ? (
          <div
            className={styles.btn}
            onClick={() => handleLoadMore(setParams, params)}
          >
            <Button className={violet}>See more</Button>
          </div>
        ) : (
          <p className={styles.empty}>The product is over</p>
        )}
      </div>
      <Categories title={'Worth seeing'} amount={5} />
      <Banner />
      <div className={styles.products}>
        <Products title={'Less than 100$'} amount={5} products={filtered} />
        <div className={styles.btn}>
          <Button className={violet}>Shop now</Button>
        </div>
      </div>
    </section>
  )
}

export default Home
