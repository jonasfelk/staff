import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch } from '../../services/store'
import { ICartItem, addItemToCart } from '../../services/Cart/cartSlice'

import { Button } from '../../components'

import { ROUTES } from '../../utils/routes'

import { grey, violet } from '../UI/Button/Button.module.scss'
import styles from './SingleProductInfo.module.scss'

interface IProductsProps {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  category: { name: string }
}

const sizes: number[] = [4.5, 5, 5.5]

export const SingleProductInfo: FC<IProductsProps> = ({
  id,
  title,
  price,
  images,
  description,
  category,
}) => {
  const dispatch = useAppDispatch()
  const [currentSize, setCurrentSize] = useState<number>(0)
  const [currentImage, setCurrentImage] = useState<string>('')

  const item: ICartItem = {
    id,
    title,
    price,
    images,
    count: 0,
    category
  }
  const addToCart = () => {
    dispatch(addItemToCart(item))
  }

  useEffect(() => {
    if (!images.length) return
    setCurrentImage(images[0])
  }, [images])

  return (
    <section className={styles.root}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>
        <ul className={styles.imagesList}>
          {images.map((image, index) => (
            <li
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              key={index}
              onClick={() => setCurrentImage(image)}
            ></li>
          ))}
        </ul>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color: </span>Blanc
        </div>
        <div className={styles.sizes}>
          <span>Sizes: </span>
          <ul className={styles.listSizes}>
            {sizes.map((size) => (
              <li
                onClick={() => setCurrentSize(size)}
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ''
                }`}
                key={size}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.desc}>{description}</div>
        <div className={styles.buttons}>
          <Button
            onClick={addToCart}
            className={violet}
            disabled={!currentSize}
          >
            Add to cart
          </Button>
          <Button className={grey}>Add to favorites</Button>
        </div>
        <div className={styles.bottom}>
          <div>19 people purchased</div>
          <Link to={ROUTES.HOME}>
            <span>Return to store</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
