import React from "react"
import { useLocation } from "react-router-dom";
import { AuthForm } from "../../features/Auth"
import { ScrollToTop } from "../lib/scroll";
import "../assets/styles/index.scss";

export const LoginPage: React.FC = () => {
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/'

    //scroll
    ScrollToTop();

    return (
        <div className="main">
            <AuthForm fromPage={fromPage}/>
        </div>
    )
}
