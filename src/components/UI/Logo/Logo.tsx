import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../../utils/routes'

import mainLogo from '../../../assets/images/logo.svg'

export const Logo: FC = () => {
  return (
    <Link to={ROUTES.HOME}>
      <img src={mainLogo} alt='STAFF' />
    </Link>
  )
}
