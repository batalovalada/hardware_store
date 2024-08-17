import React from "react";
import { about } from "../../consts/about";
import { AboutCard } from "../AboutCard";

export const AboutSales = () : JSX.Element => {
    return (
        <div className="about__sales">
            {about.map(card => <AboutCard nameClass='about__link--sales' about={card} key={card.title}/>)}
        </div>
    )
}