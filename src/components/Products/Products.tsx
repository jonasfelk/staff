import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { IProducts } from '../../services/Products/productsSlice'

import { Product } from '../../components'

import styles from './Products.module.scss'

interface IProductsProps {
  title?: string
  amount: number
  products: IProducts[]
  classNameRoot?: string
  classTitle?: string
  defaultStyle?: React.CSSProperties
}

export const Products: FC<IProductsProps> = ({
  title,
  amount,
  products,
  classNameRoot = '',
  classTitle = '',
}) => {
  const listProducts = products?.filter((_, i) => i < amount)

  return (
    <section className={`${classNameRoot}`}>
      <div className={`${styles.title} ${classTitle}`}>
        {title && <h2>{title}</h2>}
      </div>
      <div className={styles.products}>
        {listProducts?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
