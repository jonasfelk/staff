import { FC } from 'react'
import styles from './Button.module.scss'

interface IButtonProps {
  className?: string
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export const Button: FC<IButtonProps> = ({
  className = '',
  disabled,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.root} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
