import React from 'react'
import s from './Header.module.css'
import {PATH} from "./RoutesComponent";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav className={s.container}>
            <div className={s.icon}></div>
            <ul className={s.menu}>
                <li className={s.linkItem}><NavLink className={({isActive}) => isActive ? s.active : s.a}
                                                    to={PATH.PRE_JUNIOR}>Pre-junior</NavLink></li>
                <li className={s.linkItem}><NavLink className={({isActive}) => isActive ? s.active : s.a}
                                                    to={PATH.JUNIOR}>Junior</NavLink>
                </li>
                <li className={s.linkItem}><NavLink className={({isActive}) => isActive ? s.active : s.a}
                                                    to={PATH.JUNIOR_PLUS}>Junior+</NavLink></li>
            </ul>
        </nav>

    )
}

export default Header;
