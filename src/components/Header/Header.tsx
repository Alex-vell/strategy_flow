import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../../routes/Routes';

import style from './Header.module.scss';

export const Header: FC = () => (
  <header className={style.header}>
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink to={PATH.HOME} className={style.link}>
            Home
          </NavLink>
          <NavLink to={PATH.STRATEGY_LIST} className={style.link}>
            Strategies
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
