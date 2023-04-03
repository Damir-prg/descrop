import {UtilsTypes} from "../types"
import {Login, Registration, User} from "../pages"
import {Navigate} from "react-router-dom";

export const publicRoutes: UtilsTypes.IRoutes[] = [
    {path: "/login", element: <Login/>},
    {path: "/registration", element: <Registration/>}
]

export const publicException: UtilsTypes.IRoutes = {path: "*", element: <Navigate to="/login"/>}

export const authRoutes: UtilsTypes.IRoutes[] = [
    {path: "/main", element: <></>},
    {path: "/self", element: <User/>}
]

export const authException: UtilsTypes.IRoutes = {path: "*", element: <Navigate to="/main"/>}