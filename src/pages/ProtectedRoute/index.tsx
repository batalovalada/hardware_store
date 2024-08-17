import React from "react"
import { useLocation, Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../app/utils/consts";
import { useTypedSelector } from "../../shared/lib/hooks/useTypedSelector";

interface ProtectedRouteProps {
    children: any;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const location = useLocation();
    const {isAuth} = useTypedSelector(state => state.user)
    if (!isAuth) {
        return <Navigate to={`/${LOGIN_ROUTE}`} state={{from: location}}/>
    }
    return children
}
