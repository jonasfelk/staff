import { FC } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { GrFavorite } from 'react-icons/gr'

import { ROUTES } from '../../../utils/routes'
import { selectCart } from '../../../services/Cart/cartSlice'

import styles from './NavBar.module.scss'

export const NavBar: FC = () => {
  const { cart } = useSelector(selectCart)
  return (
    <div className={styles.root}>
      <Link to={ROUTES.FAVORITE}>
        <GrFavorite className={styles.favorite} />
      </Link>
      <div className={styles.cart}>
        <Link to={ROUTES.CART}>
          <HiOutlineShoppingBag className={styles.bag} />
          {cart.length > 0 ? (
            <span className={styles.count}>{cart.length}</span>
          ) : (
            ''
          )}
        </Link>
      </div>
    </div>
  )
}
