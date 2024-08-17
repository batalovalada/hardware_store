import React from "react";
import Icon from "../../../../shared/ui/icon/Icon";
import { Price } from "../../../../features/Device";
import { IFavorite } from "../../../../shared/types/IFavorite";
import "../../assets/styles/favorite.scss";

interface FavoriteProps {
    favorite: IFavorite;
    page: string;
}

export const Favorite: React.FC<FavoriteProps> = ({ favorite, page }): JSX.Element => {
    function showSale(sale: number, price: number): number {
        const num = 1 + .01*sale;
        return price + num;
    }
    return (
        <div className="favorite__card">
            <a href="/" className="favorite__link">
                <div className="favorite__left">
                    <img className="favorite__img" src={favorite.img} alt={favorite.title} />
                </div>
            </a>
            <div className="favorite__right">
                <div className="favorite__inf">
                    <a className="favorite__title" href="/">{favorite.title}</a>
                    <h3 className="favorite__art">{`Артикул: ${favorite.number}`}</h3>
                    <Price percentSale={favorite.sale} price={favorite.price}/>
                </div>
                <div className="favorite__icons">
                    {page == "basket"
                        ? <div></div>
                        : <button className="favorite__btn">
                            <Icon icon={{ nameClass: "favorite__icon", id: 'basket' }} />
                        </button>}
                    <button className="favorite__btn">
                        <Icon icon={{ nameClass: "favorite__icon__str", id: 'delete' }} />
                    </button>
                </div>
            </div>
        </div>
    )
}