import React from "react";
import { IAbout } from "../../../../shared/types/IAbout";

interface AboutCardProps {
    about: IAbout;
    nameClass?: string;
    children?: React.ReactNode;
}

export const AboutCard: React.FC<AboutCardProps> = ({ about, nameClass, children }) => {
    return (
        <a className={nameClass ? `about__link ${nameClass}` : "about__link"} href="#">
            <div className="about__item">
                <img className="about__bg" src={about.image} alt={about.title} />
                <h3 className="about__title">{about.title}</h3>
                <div className="about__text">{about.text}</div>
                {children}
            </div>
        </a>
    )
}