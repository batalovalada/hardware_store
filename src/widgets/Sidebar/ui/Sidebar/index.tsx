import React from "react";
import Icon from "../../../../shared/ui/icon/Icon";
import { Link } from "react-router-dom";
import { BASKET_ROUTE, FAVORITES_ROUTE} from "../../../../app/utils/consts";
import { Nav } from "../Nav";
import { useTypedSelector } from "../../../../shared/lib/hooks/useTypedSelector";
import './sidebar.scss';

export const Sidebar = () => {
    const { isAuth } = useTypedSelector(state => state.user);
    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <button className="sidebar__link" type="button">
                        <Icon icon={{ nameClass: "sidebar__icon", id: "geo" }} />
                        Санкт-Петербург
                    </button>
                </li>
                {isAuth ?
                <div>
                    <li className="sidebar__item">
                        <Link className="sidebar__link" to={BASKET_ROUTE}>
                            <Icon icon={{ nameClass: "sidebar__icon", id: "basket" }} />
                            Корзина
                        </Link>
                    </li>
                    <li className="sidebar__item">
                        <Link className="sidebar__link" to={FAVORITES_ROUTE}>
                            <Icon icon={{ nameClass: "sidebar__icon", id: "like" }} />
                            Избранное
                        </Link>
                    </li>
                </div>
                : <div></div>}
            </ul>
            <Nav />
        </div>
    )
}