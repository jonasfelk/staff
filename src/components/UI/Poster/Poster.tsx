import { FC } from 'react'
import { Button } from '../../../components'

import { violet } from '../Button/Button.module.scss'
import styles from './Poster.module.scss'

export const Poster: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <div className={styles.sale}>BIG SALE 20%</div>
        <div>the bestseller of 2022</div>
        <h1 className={styles.title}>LENNON r2d2 with NVIDIA 5090 TI</h1>
        <Button className={violet}>Shop now</Button>
      </div>
    </section>
  )
}
