import React from "react";
import { ScrollToTop } from "../lib/scroll";
import { IFavorite } from "../../shared/types/IFavorite";
import { Favorite } from "../../entities/Favorite";
import { useLocation } from "react-router-dom";
import "../assets/styles/index.scss";

export const FavoritesPage = (): JSX.Element => {
    const location = useLocation();
    const fromPage = location.pathname || '/'
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
            {fav.map(item=> 
                <Favorite favorite={item} page="favorite" key={item.id}/>
            )}
            
        </div>
    )
}