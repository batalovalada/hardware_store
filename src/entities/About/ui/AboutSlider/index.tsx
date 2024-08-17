import React from "react";
import Slider from "react-slick";
import { about } from "../../consts/about";
import { AboutCard } from "../AboutCard";
import { IAbout } from "../../../../shared/types/IAbout";
import "../../assets/styles/about.scss";

export const AboutSlider = () => {
    const aboutSettings = {
        className: "slick-section",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className="about__slider">
            <Slider {...aboutSettings}>
                {about.map((item: IAbout) =>
                    <AboutCard about={item} key={item.title}/>
                )}
            </Slider>
        </div>
    )
}