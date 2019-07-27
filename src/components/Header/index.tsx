import * as React from 'react';
import * as style from './style.css'

export interface HeaderProps {
  user?: string
}

const Header: React.SFC<HeaderProps> = ({ user }) => {
  return (
    <div className={style.header}>
      <h1 className={style.title}>Workout Tracker</h1>
      <p className={style.user}>{`Hello${user ? `, ${user}` : ` there`}`}</p>
    </div>);
}

export default Header;