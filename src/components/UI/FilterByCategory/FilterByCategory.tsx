import { ChangeEvent, FC, FormEvent } from 'react'

import styles from './FilterByCategory.module.scss'

type TValues = {
  title: string
  price_min: number
  price_max: number
}
interface FilterByCategoryProps {
  value: TValues
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}
export const FilterByCategory: FC<FilterByCategoryProps> = ({
  value,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            type='text'
            name='title'
            placeholder='Product name'
            autoComplete='off'
            value={value.title}
            onChange={handleChange}
          />
        </div>
        <div className={styles.row}>
          <input
            type='number'
            name='price_min'
            placeholder='0'
            autoComplete='off'
            value={value.price_min}
            onChange={handleChange}
          />
          <span>Price from</span>
        </div>
        <div className={styles.row}>
          <input
            type='number'
            name='price_max'
            placeholder='0'
            autoComplete='off'
            value={value.price_max}
            onChange={handleChange}
          />
          <span>Price to</span>
        </div>
        <div className={styles.btn}>
          <button type='submit'>search</button>
        </div>
      </form>
    </div>
  )
}
