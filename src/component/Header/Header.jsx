import React from 'react';
import style from './Header.module.css';

import logo from '../../assets/img/logo_jkl.png';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, login, logout}) => {
    return (
        <header>
            <div className={style.header__wrapper}>
                <div className={style.logo__wrapper}>
                    <img src={logo} alt="logo"/>
                </div>
                <h1>#jkl social-network</h1>
            </div>
            <div className={style.login__block}>
    { isAuth ? <div><h4>{login}</h4> <button className={style.authBtn} onClick={logout}>LOGOUT</button></div> : <NavLink to={'/login'}>
                    <h4>LOGIN</h4>
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header;