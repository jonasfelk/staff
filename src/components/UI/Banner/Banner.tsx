import { FC } from 'react'
import { Button } from '../../../components'

import BANNER from '../../../assets/images/banner.png'
import SHOE from '../../../assets/images/shoe.png'
import DEVICE from '../../../assets/images/devices.png'

import { violet } from '../../UI/Button/Button.module.scss'
import styles from './Banner.module.scss'

export const Banner: FC = () => {
  console.log('sdfsdfs');
  return (
    <section className={styles.root}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW YEAR <span>sale</span>
        </p>
        <Button className={violet}>See more</Button>
        <img className={styles.shoe} src={SHOE} alt='Shoe' />
        <img className={styles.device} src={DEVICE} alt='Device' />
      </div>
      <div className={styles.right}>
        <img src={BANNER} alt='BANNER' />
        <p>
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  )
}
