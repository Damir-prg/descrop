import {IUser} from "./StoreTypes";


export type TUserCard = {
    data: IUser;
}

export type TUserChart = {
    size: number
};

export type TNewUserInfoFrom = {
    prevData: IUser;
    closeModal?: (bool: boolean) => void;
}
