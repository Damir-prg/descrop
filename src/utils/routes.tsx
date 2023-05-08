import { UtilsTypes } from "../types";
import { Auth, User, Tasks, Main } from "../pages";
import { Navigate } from "react-router-dom";

export const publicRoutes: UtilsTypes.IRoutes[] = [
  { path: "/auth", element: <Auth /> },
];

export const publicException: UtilsTypes.IRoutes = {
  path: "*",
  element: <Navigate to="/auth" />,
};

export const authRoutes: UtilsTypes.IRoutes[] = [
  { path: "/main", element: <Main /> },
  { path: "/self", element: <User /> },
  { path: "/tasks", element: <Tasks /> },
  { path: "/cloud", element: <></> },
];

export const authException: UtilsTypes.IRoutes = {
  path: "*",
  element: <Navigate to="/self" />,
};
