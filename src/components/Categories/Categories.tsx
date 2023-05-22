import { FC, useEffect } from 'react'

import {
  fetchCategories,
  selectCategories,
} from '../../services/Categories/categoriesSlice'

import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../services/store'

import { Category } from '../../components'

import styles from './Categories.module.scss'

interface ICategoriesProps {
  title: string
  amount: number
}

export const Categories: FC<ICategoriesProps> = ({ title, amount }) => {
  const dispatch = useAppDispatch()
  const { categories } = useSelector(selectCategories)
  const listCategories = categories.filter((_, i) => i < amount)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <section className={styles.root}>
      <div className={styles.title}>{title && <h2>{title}</h2>}</div>
      <div className={styles.categories}>
        {listCategories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    </section>
  )
}
