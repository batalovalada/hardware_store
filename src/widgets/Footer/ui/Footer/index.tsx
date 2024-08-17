import React from "react";
import './footer.scss';

export const Footer = () => {
    const links1: string[] =[
        "О Компании",
        "Новости",
        "Партнерам",
        "Политика конфиденциальности",
    ]

    const links2: string[] = [
        "Как оформить заказ",
        "Способы оплаты",
        "Доставка",
        "Кредиты",
        "Обмен, возврат, гарантия"
    ]

    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__item">
                    <h3 className="footer__title">Компания</h3>
                    <ul className="footer__list">
                        {links1.map(link => <li className="footer__li" key={link}>
                            <a className="footer__link" href="/">{link}</a>
                        </li>)}
                    </ul>
                </div>
                <div className="footer__item">
                    <h3 className="footer__title">Покупателям</h3>
                    <ul className="footer__list">
                        {links2.map(link => <li className="footer__li" key={link}>
                            <a className="footer__link" href="/">{link}</a>
                        </li>)}
                    </ul>
                </div>
                <div className="footer__item">
                    <h3 className="footer__title">Оставайтесь на связи</h3>
                    <ul className="footer__list">
                        <li className="footer__li">
                            <a className="footer__link" href="tel:+7800*******">+7-800-***-**-**</a>
                        </li>
                        <li className="footer__li">
                            <a className="footer__link" href="mailto:inn_store@gmail.ru">inn_store@gmail.ru</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__c">&#169; InnStore 2014-2024</div>
        </footer>
    )
}