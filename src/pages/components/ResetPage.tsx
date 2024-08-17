import React from "react"
import { AuthForm } from "../../features/Auth"
import { ScrollToTop } from "../lib/scroll";
import "../assets/styles/index.scss";

export const ResetPage: React.FC = () => {
    ScrollToTop();
    return (
        <div className="main">
            <AuthForm />
        </div>
    )
}