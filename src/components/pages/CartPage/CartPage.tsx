import { FC } from 'react'

import { Cart, Sidebar } from '../../../components'

import styles from './CartPage.module.scss'

const CartPage: FC = () => {
  return (
    <section className={styles.root}>
      <Sidebar />
      <Cart />
    </section>
  )
}

export default CartPage
