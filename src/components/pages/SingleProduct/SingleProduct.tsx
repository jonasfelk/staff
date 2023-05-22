import React, { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../services/store'
import { useNavigate, useParams } from 'react-router-dom'

import {
  fetchProducts,
  relatedProducts,
  selectProducts,
} from '../../../services/Products/productsSlice'

import { useGetProductQuery } from '../../../services/api/apiSlice'

import { SingleProductInfo, Sidebar, Products } from '../../../components'

import { ROUTES } from '../../../utils/routes'

import styles from './SingleProduct.module.scss'

const SingleProduct: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id = '' } = useParams()

  const { related } = useSelector(selectProducts)
  const { data, isLoading, isFetching, isSuccess, isError } =
    useGetProductQuery(id)

  useEffect(() => {
    if (isError) {
      navigate(ROUTES.HOME)
    }
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    if (!data) return
    dispatch(relatedProducts(data.category.id))
    window.scrollTo(0, 0)
  }, [data])

  return (
    <section className={styles.root}>
      <div className={styles.row}>
        <Sidebar />
        {!data ? <h1>Loading...</h1> : <SingleProductInfo {...data} />}
      </div>
      <div className={styles.products}>
        <Products title={'Related products'} amount={10} products={related} />
      </div>
    </section>
  )
}

export default SingleProduct
