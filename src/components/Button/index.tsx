import * as React from 'react';
import * as style from './style.css'
import cn from 'classnames'

export interface ButtonProps {
  onClick: VoidFunction,
  primary?: Boolean,
  secondary?: Boolean,
  children: React.ReactChildren
}

const Button: React.SFC<ButtonProps> = ({ primary, secondary, onClick, children }) => {
  const buttonStyles = cn(
    style.button,
    primary && style.primary,
    secondary && style.secondary
  )
  return (<button className={buttonStyles} onClick={onClick}>{children}</button>);
}

export default Button;