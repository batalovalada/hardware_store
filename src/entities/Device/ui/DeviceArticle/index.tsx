import React from "react";
import { IArticle } from "../../../../shared/types/IArticle";
import tvImg from "../../../../app/assets/images/tv.jpg"
import phoneImg from "../../../../app/assets/images/phone.jpg"
import microvaveImg from "../../../../app/assets/images/microvave.jpg"
import fridgeImg from "../../../../app/assets/images/fridge.jpg"
import cameraImg from "../../../../app/assets/images/camera.jpg"
import laptopImg from "../../../../app/assets/images/laptop.jpg"
import pkImg from "../../../../app/assets/images/pk.jpg"
import photoCameraImg from "../../../../app/assets/images/photocamera.jpg"
import tabletImg from "../../../../app/assets/images/tablet.jpg"
import { Evaluation } from "../../../../features/Device";
import { Price } from "../../../../features/Device";

interface DeviceArticleProps {
    article: IArticle;
}

export const DeviceArticle: React.FC<DeviceArticleProps> = ({article}): JSX.Element => {
    function photo (type: string) {
        switch (type) {
            case "ПК":
                return pkImg;
            case "Телефоны":
                return phoneImg;
            case "Фотоаппараты":
                return photoCameraImg;
            case "Холодильники":
                return fridgeImg;
            case "Ноутбуки":
                return laptopImg;
            case "Микроволновки":
                return microvaveImg;
            case "Видеокамеры":
                return cameraImg;
            case "Планшеты":
                return tabletImg;
            case "Телевизоры":
                return tvImg;
            default:
                return phoneImg;
        }
    }
    return (
        <div className="device-article">
            <div className="device-article__main">
                <div className="device-article__left">
                    <img className="device-article__img" src={photo(article.type)} alt={article.name} />
                </div>
                <div className="device-article__right">
                    <h1 className="device-article__title">{article.name}</h1>
                    <div className="device-article__discription">{article.discription}</div>
                    <div className="device-article__art">{article.id}</div>
                    <div className="device-article__eval">
                        <Evaluation rating={article.rating} />
                    </div>
                    <Price percentSale={article.sale} price={article.price} />
                </div>
            </div>
            <h3 className="device-article__subtitle">Основные характеристики</h3>
            <ul className="device-article__list">
            {article.features.map(item => 
                <li className="device-article__li">{item}</li>)}
            </ul>
        </div>
    )
}