import React from "react";
import { AboutCard } from "../AboutCard";
import { AboutSlider } from "../AboutSlider";
import MyLink from "../../../../shared/ui/link/MyLink";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SALES_ROUTE} from "../../../../app/utils/consts";
import mainAboutImg from "../../assets/images/about/2.jpg"
import { useTypedSelector } from "../../../../shared/lib/hooks/useTypedSelector";
import { useLocation } from "react-router-dom";

export const About = () => {
    const mainAbout = {
        image: mainAboutImg,
        title: 'Личный кабинет',
        text: 'Lorem ipsum dolor sit amet'
    }

    const {isAuth} = useTypedSelector(state => state.user)
    const location = useLocation();
    const page = location.state?.from?.pathname || ''
    return (
        <div className="container">
            <div className="about">
                <AboutCard about={mainAbout} nameClass='about__link--main'>
                    <div className="about__nav">
                        {isAuth
                            ?
                            <div className="about__links">
                                <MyLink white={true} to={`${page}/${ADMIN_ROUTE}`}>Профиль</MyLink>
                                <MyLink white={true} to={`${page}/${BASKET_ROUTE}`}>Корзина</MyLink>
                            </div>
                            :
                            <MyLink white={true} to={`${page}/${LOGIN_ROUTE}`}>Войти</MyLink>
                        }
                    </div>
                </AboutCard>
                <AboutSlider />
            </div>
        </div>
    )
}