import React, {useState} from "react";
import { ADMIN_ROUTE, LOGIN_ROUTE, RESET_ROUTE, SIGNUP_ROUTE } from "../../../../app/utils/consts";
import { Logo } from "../../../../entities/Logo";
import { Link } from "react-router-dom";
import Icon from "../../../../shared/ui/icon/Icon";
import { useTypedSelector } from "../../../../shared/lib/hooks/useTypedSelector";
import MyModal from "../../../../shared/ui/modal/MyModal";
import { AuthModalForm } from "../../../../features/Auth";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './header.scss';

export const Header = () => {
    const {isAuth} = useTypedSelector(state => state.user);
    const [modal, setModal] = useState(false)
    const [sidebarActive, setSidebarActive] = useState<boolean>(false);
    useEffect((): void => {
        if (sidebarActive) document.body.classList.add('show-nav')
        else document.body.classList.remove('show-nav')
    }, [sidebarActive])


    //check if user in sign-in, sign-up or reset pages to hide button 'sign-in' in this way
    const location = useLocation();
    const checkLoginPage = (): boolean => {
        return location.pathname === '/' + LOGIN_ROUTE || location.pathname === '/' + SIGNUP_ROUTE || location.pathname === '/' + RESET_ROUTE
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <ul className="header__list">
                        <div className="header__item header__item--tel">
                            <a className="header__link" href="tel:+7800*******">+7-800-***-**-**</a>
                        </div>
                        <li className="header__item">
                            {isAuth
                            ?
                            <Link className="header__link" to={`/${ADMIN_ROUTE}`}>
                                <Icon icon={{ nameClass: "header__icon", id: "profile" }} />
                                Профиль
                            </Link>
                            :
                            checkLoginPage()
                                ?
                                <></>
                                :
                                <>
                                    <button className="header__btn" type="button" onClick={() => setModal(true)}>
                                        <Icon icon={{ nameClass: "header__icon", id: "profile" }} />
                                        Войти
                                    </button>
                                    <MyModal active={modal} setActive={setModal}>
                                        <AuthModalForm active={modal} setActive={setModal}/>
                                    </MyModal>
                                </>}
                        </li>
                        <li className="header__item">
                            <button className='header__burger'
                                type="button"
                                onClick={(): void => setSidebarActive(!sidebarActive)
                                }>
                                <span>Menu</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}