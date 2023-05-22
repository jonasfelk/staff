import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useGetProductsQuery } from '../../../services/api/apiSlice'
import { IProducts } from '../../../services/Products/productsSlice'
import { selectCategories } from '../../../services/Categories/categoriesSlice'

import { Sidebar, Products } from '../../../components'

import { Poster, Button, FilterByCategory } from '../../../components'

import { handleLoadMore } from '../../../utils/common'

import { rootDefault, titleDefault } from '../../Products/Products.module.scss'
import { violet } from '../../UI/Button/Button.module.scss'
import styles from './SingleCategory.module.scss'

type TDefaultValues = {
  title: string
  price_min: number
  price_max: number
}
type TDefaultParams = {
  categoryId: string
  limit: number
  offset: number
}

const SingleCategory: FC = () => {
  const { id = '' } = useParams()

  const defaultValue: TDefaultValues = {
    title: '',
    price_min: 0,
    price_max: 0,
  }
  const defaultParams: TDefaultParams = {
    categoryId: id,
    limit: 10,
    offset: 0,
    ...defaultValue,
  }

  const { categories } = useSelector(selectCategories)
  const [params, setParams] = useState(defaultParams)
  const { data, isLoading, isSuccess, isFetching } = useGetProductsQuery(params)
  const [values, setValues] = useState(defaultValue)
  const [isEnd, setIsEnd] = useState(true)
  const [cat, setCat] = useState<string>('')
  const [items, setItems] = useState<IProducts[]>([])

  useEffect(() => {
    if (!id) return
    setValues(defaultValue)
    setItems([])
    setIsEnd(true)
    setParams({ ...defaultParams, categoryId: id })
  }, [id])

  useEffect(() => {
    if (isLoading) return
    if (!data?.length) return setIsEnd(false)

    setItems((prevState) => [...prevState, ...data])
  }, [data, isLoading])

  useEffect(() => {
    if (!id || !categories.length) return

    const category = categories.find((item) => item.id === Number(id))
    setCat(category?.name as string)
  }, [id, categories])

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value })
  }
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
  //   setValues({ ...values, [event.target.name]: event.target.value })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!values.title) return
    setItems([])
    setIsEnd(false)
    setParams({ ...defaultParams, ...values })
  }
  const handleReset = () => {
    setValues(defaultValue)
    setParams(defaultParams)
    setIsEnd(true)
    setItems([])
  }

  return (
    <section className={styles.root}>
      <div className={styles.row}>
        <Sidebar />
        <Poster />
      </div>
      <div className={styles.category}>
        <div className={styles.title}>{cat}</div>
        <FilterByCategory
          value={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : !isSuccess || !items?.length ? (
          <div className={styles.reset}>
            <p>No Results :(</p>
            <Button className={violet} onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <div className={styles.products}>
            <Products
              classNameRoot={rootDefault}
              classTitle={titleDefault}
              amount={items.length}
              products={items}
            />
            {isEnd ? (
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
        )}
      </div>
    </section>
  )
}

export default SingleCategory
