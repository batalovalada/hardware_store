import React from "react"
import { ScrollToTop } from "../lib/scroll";
import { useLocation } from "react-router-dom";
import "../assets/styles/index.scss";
import { IFavorite } from "../../shared/types/IFavorite";
import { Favorite } from "../../entities/Favorite";

export const BasketPage = () => {
    const location = useLocation();
    const page = location.pathname || '/'
    ScrollToTop();
    const fav: IFavorite[] = [{
        id: 1,
        title: "string",
        number: 8888888,
        img: "https://placehold.it/80",
        price: 2400,
        sale: 10,
    }, {
        id: 2,
        title: "stdddddddring",
        number: 9888888,
        img: "https://placehold.it/80",
        price: 4500,
        sale: 0,
    },]
    return (
        <div className="main">
            {fav.map(item =>
                <Favorite favorite={item} page="basket" key={item.id} />
            )}

        </div>
    )
}
