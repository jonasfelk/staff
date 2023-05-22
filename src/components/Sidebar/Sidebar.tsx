import React, { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../services/store'

import {
  fetchCategories,
  selectCategories,
  Status,
} from '../../services/Categories/categoriesSlice'

import styles from './Sidebar.module.scss'

export const Sidebar: FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const setActive = ({ isActive }: { isActive: Boolean }) => ({
    color: isActive ? 'var(--violet)' : '',
  })

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const { categories, status } = useSelector(selectCategories)

  const listCategories = categories.map(({ id, name }) => (
    <li key={id}>
      <NavLink to={`/categories/${id}`} style={setActive}>
        {name}
      </NavLink>
    </li>
  ))

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>CATEGORIES</h2>
      <nav className={styles.nav}>
        <ul>
          {status === Status.LOADING ? <p>Loading...</p> : listCategories}
        </ul>
      </nav>
      <div className={styles.info}>
        <h3>
          <a href='http://help' target='_blank' rel='noopener noreferrer'>
            Help
          </a>
        </h3>
        <span>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            Terms & Conditions
          </a>
        </span>
      </div>
    </section>
  )
})
