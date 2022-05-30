import React from 'react'
import s from './Header.module.css'
import {PATH} from "./RoutesComponent";
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <div className={s.menu}>
            <NavLink className={({isActive}) => isActive ? s.active : s.a} to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : s.a} to={PATH.JUNIOR}>junior</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : s.a} to={PATH.JUNIOR_PLUS}>junior+</NavLink>
        </div>
    )
}

export default Header;
