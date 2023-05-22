import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { IProducts } from '../../services/Products/productsSlice'

import styles from './Product.module.scss'

export const Product: FC<IProducts> = ({
  id,
  title,
  images,
  price,
  category: { name },
}) => {
  // const subString = title.length > 20 ? title.substring(0, 20) + '...' : title
  return (
    <section className={styles.root}>
      <Link to={`/products/${id}`}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${images[0]})` }}
        />
        <div className={styles.wrap}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.subCategory}>{name}</div>
          <div className={styles.row}>
            <div className={styles.prise}>
              {price}
              <span className={styles.oldPrise}>
                {Math.floor(price * 1.1)}$
              </span>
            </div>
            <div className={styles.count}>
              {Math.floor(Math.random() * 100 + 1)} purchased
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
