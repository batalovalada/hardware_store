import React from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../lib/scroll";
import "../assets/styles/index.scss";

export const NotFoundPage = () => {
    ScrollToTop();
    return (
        <div className="main">
            <div className="error">
                <div className="container">
                    <h1 className="error__title">Страницы не существует!</h1>
                    <Link className="error__link" to="/">перейти на главную</Link>
                </div>
            </div>
        </div>
    )
}
