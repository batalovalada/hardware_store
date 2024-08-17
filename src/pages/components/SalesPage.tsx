import React from "react";
import { About, AboutSales } from "../../entities/About";

export const SalesPage = () : JSX.Element => {
    return (
        <div className="main">
            <About/>
            <AboutSales/>
        </div>
    )
}