import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './SideBar.module.css';

const SideBar = () => {
    return (
        <div className={style.sidebar}>
            <h2>Navigation</h2>
            <ul className={style.menu}>
                <li className={style.menu__item}>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li className={style.menu__item}>
                    <NavLink to='/chat'>Messages</NavLink>
                </li>
                <li className={style.menu__item}>
                    <NavLink to='/users'>Users</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;