import { FC } from 'react'

import avatar from '../../../assets/images/avatar.jpg'

import styles from './UserInfo.module.scss'

export const UserInfo: FC = () => {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={avatar} alt='Avatar' />
      <span className={styles.username}>Guest</span>
    </div>
  )
}
