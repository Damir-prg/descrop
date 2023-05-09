import {ReactNode} from "react";

interface IBaseRoute {
    path: string;
    element: ReactNode;
}

export interface IRoutes extends IBaseRoute{
    exact?: boolean;
    children?: Array<IRoutes>
}