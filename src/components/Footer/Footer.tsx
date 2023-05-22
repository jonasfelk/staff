import { FC } from 'react'

import { Logo } from '../UI/Logo/Logo'
import { SocialsIcons } from '../UI/SocialsIcons/SocialsIcons'

import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <span>Copyright &copy; 2023</span>
      <SocialsIcons />
    </div>
  )
}
