import React from "react";
import { IShop } from "../../../shared/types/IShop";

interface ShopCardProps {
    shop: IShop;
}

export const ShopCard = ({shop}: ShopCardProps): JSX.Element => {
    return (
        <div className="shop__card">
            <h3 className="shop__title">{shop.title}</h3>
            <div className="shop__data">
                <div className="shop__adress">{shop.adress}</div>
                <div className="shop__time">{shop.time}</div>
            </div>
        </div>
    )
}