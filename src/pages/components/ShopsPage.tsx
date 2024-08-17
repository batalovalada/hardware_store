import React from "react";
import { ScrollToTop } from "../lib/scroll";
import "../assets/styles/index.scss";
import { Shop } from "../../entities/Shop";

export const ShopsPage = () : JSX.Element => {
    ScrollToTop();
    return (
        <div className="main">
            <Shop/>
        </div>
    )
}