import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../services/store'

import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  selectCart,
} from '../../services/Cart/cartSlice'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'

import styles from './Cart.module.scss'

export const Cart: FC = () => {
  const dispatch = useAppDispatch()
  const { cart } = useSelector(selectCart)
  const totalPrice: number = cart.reduce((sum, { price, count }) => sum + price * count, 0);
  
  return (
    <section className={styles.root}>
      <h2>Your cart</h2>
      {!cart.length ? (
        <div className={styles.empty}>Here is empty :(</div>
      ) : (
        <ul className={styles.list}>
          {cart.map((item) => {
            const { id, title, count, images, price, category } = item

            return (
              <li key={id} className={styles.item}>
                <div
                  className={styles.img}
                  style={{ backgroundImage: `url(${images[0]})` }}
                ></div>
                <div className={styles.info}>
                  <h3 className={styles.title}>{title}</h3>
                  <span className={styles.category}>{category.name}</span>
                </div>
                <div className={styles.price}>{price}$</div>
                <div className={styles.quantity}>
                  <div
                    className={styles.minus}
                    onClick={() => dispatch(removeItemFromCart(id))}
                  >
                    <AiOutlineMinus />
                  </div>
                  <span>{count}</span>
                  <div
                    className={styles.plus}
                    onClick={() => dispatch(addItemToCart(item))}
                  >
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className={styles.countPrice}>{price * count}$</div>
                <div
                  className={styles.delete}
                  onClick={() => dispatch(deleteItemFromCart(id))}
                >
                  <GrFormClose />
                </div>
              </li>
            )
          })}
        </ul>
      )}

      <div className={styles.actions}>
        <div className={styles.totalPrice}>
          TOTAL PRICE: <span>{totalPrice}$</span>
        </div>
        <div className={styles.checkout}>Proceed to checkout</div>
      </div>
    </section>
  )
}
