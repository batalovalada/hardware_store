import React from "react"
import { ScrollToTop } from "../lib/scroll";
import { DeviceArticle } from "../../entities/Device/ui/DeviceArticle";
import "../assets/styles/index.scss";

export const DevicePage = () => {
    ScrollToTop();

    const article = {
        id: 1, name: "cbshhdbcuysdhcwiuhwc  xcauwjiec ycxhwiehyiy yw7c8",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laudantium, voluptatem, error.Consectetur, ullam, aliquam.Accusamus saepe reprehenderit perferendis, maxime nesciunt dolor</a> corrupti voluptatem et debitis, laboriosam illo ullam modi ? Incidunt.Fuga numquam aliquid, aut sit ipsa libero deleniti ipsum qui corporis.Aliquid vitae, eaque, quae molestiae cupiditate libero fugiat tenetur hic officia sapiente voluptatibus unde sed! Inventore libero, perspiciatis.Nam",
    type: "Телефоны",
    rating: 4.7,
    price: 5000,
    brand: "Apple",
    sale: 10,
    features: ["Lorem ipsum dolor sit amet", "consectetur adipisicing elit.", "consectetur adipisicing elit.consectetur adipisicing elit.consectetur adipisicing elit.consectetur adipisicing elit."]
}
    return (
        <div className="main">
            <DeviceArticle article={article}/>
        </div>
    )
}
