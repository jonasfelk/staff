import { ChangeEvent, FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetProductsQuery } from '../../../services/api/apiSlice'

import { CgSearch } from 'react-icons/Cg'

import styles from './Search.module.scss'

export const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const { data, isLoading } = useGetProductsQuery({ title: searchValue })
  
  const handleSearchChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  // const handleSearchChangeValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue({ value })
  // }
  return (
    <form className={styles.root}>
      <CgSearch className={styles.icon} />
      <input
        className={styles.input}
        type='search'
        name='search'
        placeholder='Search for anything...'
        autoComplete='off'
        value={searchValue}
        onChange={handleSearchChangeValue}
      />
      {searchValue && (
        <div className={styles.box}>
          {isLoading
            ? 'Loading'
            : !data?.length
            ? 'No results'
            : data.map(({ title, images, id }) => {
                return (
                  <Link
                    key={id}
                    onClick={() => setSearchValue('')}
                    className={styles.item}
                    to={`/products/${id}`}
                  >
                    <div
                      className={styles.image}
                      style={{ backgroundImage: `url(${images[0]})` }}
                    />
                    <div className={styles.title}>{title}</div>
                  </Link>
                )
              })}
        </div>
      )}
    </form>
  )
}
