import {createEvent, createStore} from "effector";
import {StoreTypes} from "../types";
import {PageConsts} from "../consts";


export const setNewUserinfo = createEvent<StoreTypes.IUser>()

export const $userInfo = createStore<StoreTypes.IUser>(PageConsts.userInitial)
    .on(setNewUserinfo, (state, payload: StoreTypes.IUser) => payload);