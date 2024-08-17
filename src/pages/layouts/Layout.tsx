import React from "react";
import {Header} from "../../widgets/Header";
import { Sidebar } from "../../widgets/Sidebar";
import {Footer} from "../../widgets/Footer";
import { Outlet } from "react-router-dom";
import "./page.scss";

export const Layout = () => {
    return (
        <div className="page">
            <Header/>

            <Sidebar />

            <Outlet/>

            <Footer/>
        </div>
    )
}
