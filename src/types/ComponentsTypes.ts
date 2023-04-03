import {IUser} from "./StoreTypes";


export type TUserCard = {
    textStyles: string;
    data: IUser;
}

export type TUserChart = {
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
    levels?: number;
};