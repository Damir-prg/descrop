import {UtilsTypes} from "../types"
import {Login, Registration, Auth, User, Tasks} from "../pages"
import {Navigate} from "react-router-dom";

export const publicRoutes: UtilsTypes.IRoutes[] = [
    {path: "/auth", element: <Auth/>},
    // {path: "/login", element: <Login/>},
    // {path: "/registration", element: <Registration/>}
]

export const publicException: UtilsTypes.IRoutes = {path: "*", element: <Navigate to="/auth"/>}

export const authRoutes: UtilsTypes.IRoutes[] = [
    {path: "/main", element: <></>},
    {path: "/self", element: <User/>},
    {path: "/tasks", element: <Tasks/>},
    {path: "/cloud", element: <></>},
]

export const authException: UtilsTypes.IRoutes = {path: "*", element: <Navigate to="/main"/>}