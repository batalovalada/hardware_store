import {createBrowserRouter} from "react-router-dom";
import { MAIN_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, RESET_ROUTE, FAVORITES_ROUTE, SHOPS_ROUTE, SALES_ROUTE } from "../utils/consts"
import { FavoritesPage } from "../../pages";
import {AdminPage} from "../../pages"
import {LoginPage} from "../../pages"
import {SignUpPage} from "../../pages"
import {BasketPage} from "../../pages"
import {DevicePage} from "../../pages"
import {MainPage} from "../../pages";
import { ResetPage } from "../../pages";
import {NotFoundPage} from "../../pages";
import {ProtectedRoute} from "../../pages";
import { ShopsPage } from "../../pages";
import { SalesPage } from "../../pages";
import { Layout } from "../../pages";

export const router = createBrowserRouter([
    {
        path: MAIN_ROUTE,
        element: <Layout/>,
        children: [
            {
                path: MAIN_ROUTE,
                element: <MainPage/>,
            },
            {
                path: ADMIN_ROUTE,
                element:    <ProtectedRoute>
                                <AdminPage />
                            </ProtectedRoute>,
            },
            { 
                path: BASKET_ROUTE,
                element:    <ProtectedRoute>
                                <BasketPage />
                            </ProtectedRoute>,
            },
            {
                path: FAVORITES_ROUTE,
                element: <ProtectedRoute>
                            <FavoritesPage />
                        </ProtectedRoute>,
            },
            { 
                path: LOGIN_ROUTE,
                element: <LoginPage/>,
            },
            {
                path: SHOPS_ROUTE,
                element: <ShopsPage />,
            },
            {
                path: SALES_ROUTE,
                element: <SalesPage />,
            },
            { 
                path: SIGNUP_ROUTE,
                element: <SignUpPage/>,
            },
            {
                path: RESET_ROUTE,
                element: <ResetPage />,
            },
            { 
                path: DEVICE_ROUTE + '/:id',
                element: <DevicePage/>,
            },
            { 
                path: '*',
                element: <NotFoundPage/>,
            }
        ],
    },
]);