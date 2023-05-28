// import Admin from "./pages/Admin";
import {CAFE_ROUTE, ABOUT_ROUTE, MENU_ROUTE} from "../utils/consts";
// import Basket from "./pages/Basket";
// import Shop from "./pages/Shop";
// import Auth from "./pages/Auth";
// import DevicePage from "./pages/DevicePage";
import Home from "../components/Home"
import About from "../components/About"
import Menu from "../components/Menu"
import Hbut from "../components/Hbut"
export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // },
    // {
    //     path: BASKET_ROUTE,
    //     Component: Basket
    // },
]

export const publicRoutes = [
    {
        path: CAFE_ROUTE,
        Component: Home
    },
    // {
    //     path: LOGIN_ROUTE,
    //     Component: Auth
    // },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: MENU_ROUTE,
        Component: Menu
    },
    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: DevicePage
    // },
]
