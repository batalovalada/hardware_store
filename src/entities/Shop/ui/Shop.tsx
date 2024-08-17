import React from "react";
import { ShopList } from "./ShopList";
import '../assets/styles/shop.scss';

export const Shop = () : JSX.Element => {
    return (
        <div className="shop">
            <iframe className="shop__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A226b45de32d73da5dcc25106631d97b64ec519a42dc9318cff5e823b347753af&amp;source=constructor" frameBorder="0"></iframe>
            <ShopList />
        </div>
    )
}