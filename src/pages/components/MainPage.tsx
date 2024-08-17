import React from "react"
import { Intro } from "../../entities/Intro"
import { About } from "../../entities/About"
import { Device } from "../../features/Device"
import { ScrollToTop } from "../lib/scroll"
import "../assets/styles/index.scss";

export const MainPage: React.FC = () => {
    const intro = {
        title: "InnStore",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas."
    }

    ScrollToTop();

    return (
        <div className="main main--home">
            <Intro intro={intro}/>
            <About />
            <Device />
        </div>
    )
}