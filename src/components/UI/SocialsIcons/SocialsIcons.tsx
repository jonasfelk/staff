import { FC } from 'react'

import { AiOutlineFacebook, AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'

import styles from './SocialsIcons.module.scss'

export const SocialsIcons: FC = () => {
  return (

      <ul className={styles.root}>
        <li>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineFacebook className={styles.icon}/>
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
        ><AiOutlineYoutube className={styles.icon} /></a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
        ><AiOutlineInstagram className={styles.icon} /></a>
        </li>
      </ul>

  )
}
