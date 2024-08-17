import React from "react";
import "./price.scss";

interface PriceProps {
    percentSale: number;
    price: number;
}

function sale(percentSale : number, price : number):number {
    return price*(100-percentSale)/100
}

export const Price = ({percentSale, price}: PriceProps): JSX.Element => {
    return (
        <div className="price">
            <h2 className="price__title">{sale(percentSale, price)} &#8381;</h2>
            {percentSale
                ? <div className="price__sale">{price} &#8381;</div>
                : <></>
            }
        </div>
    )
}