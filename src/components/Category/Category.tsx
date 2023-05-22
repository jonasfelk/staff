import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ICategories } from '../../services/Categories/categoriesSlice';

import styles from "./Category.module.scss";

export const Category: FC<ICategories> = ({ id, image, name }) => {
  return (
    <section className={styles.root}>
      <Link to={`/categories/${id}`}>
        <img
          className={styles.image}
          src={image} alt={name}
        />
        <div className={styles.title}>{name}</div>
      </Link>
    </section>
  )
}
