import React from "react"
import { useActions } from "../../shared/lib/hooks/useActions"
import { ScrollToTop } from "../lib/scroll"
import { Profile } from "../../entities/Profile";
import "../assets/styles/index.scss";

export const AdminPage = () => {
    const {logout} = useActions()

    ScrollToTop();
    
    return (
        <div className="main">
            <Profile logout={logout} />
        </div>
    )
}
