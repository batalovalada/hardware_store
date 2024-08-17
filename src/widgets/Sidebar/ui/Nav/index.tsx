import React from "react";
import { NavLink } from "react-router-dom";
import { MAIN_ROUTE, SHOPS_ROUTE, SALES_ROUTE } from "../../../../app/utils/consts";
import './nav.scss';

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className="nav__link" to={SALES_ROUTE}>Акции</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to={SHOPS_ROUTE}>Магазины</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to={MAIN_ROUTE}>Каталог</NavLink>
                </li>
            </ul>
        </nav>
    )
}