import React from "react";
import { ShopCard } from "./ShopCard";
import { IShop } from "../../../shared/types/IShop";

const shops : IShop[] = [
    {
        id: 1,
        title: "DNS ТЦ Мегаполис",
        adress: "г. Гатчина, пр-т 25 Октября, д. 42",
        time: "Ежедневно с 10:00 до 21:00"
    },
    {
        id: 2,
        title: "DNS ТЦ Мегаполис",
        adress: "г. Гатчина, пр-т 25 Октября, д. 42",
        time: "Ежедневно с 10:00 до 21:00"
    },
    {
        id: 3,
        title: "DNS ТЦ Мегаполис",
        adress: "г. Гатчина, пр-т 25 Октября, д. 42",
        time: "Ежедневно с 10:00 до 21:00"
    },
    {
        id: 4,
        title: "DNS ТЦ Мегаполис",
        adress: "г. Гатчина, пр-т 25 Октября, д. 42",
        time: "Ежедневно с 10:00 до 21:00"
    }
]

export const ShopList = (): JSX.Element => {
    return (
        <div className="shop__list">
            {shops.map(shop => <ShopCard key={shop.id} shop={shop}/>)}
        </div>
    )
}