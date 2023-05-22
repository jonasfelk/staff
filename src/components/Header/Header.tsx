import { FC } from 'react'

import { Logo } from '../UI/Logo/Logo'
import { UserInfo } from '../UI/UserInfo/UserInfo'
import { Search } from '../UI/Search/Search'
import { NavBar } from '../UI/NavBar/NavBar'

import styles from './Header.module.scss'

export const Header: FC = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <UserInfo />
      <Search/>
      <NavBar/>
    </div>
  )
}
