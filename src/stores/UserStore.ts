import {combine, createEffect, createEvent, createStore} from "effector";
import {StoreTypes} from "../types";
import {userApi} from "../API";


export const getUserDataFx = createEffect<{id: number}, StoreTypes.IUser, Error>(
  {
    handler: async (data) => {

      return await userApi.getOne(data);
    },
  }
);

export const setNewUserinfo = createEvent<StoreTypes.IUser>()

const $userData = createStore<StoreTypes.IUser | null>(null)
    .on(setNewUserinfo, (state, payload) => payload)
    .on(getUserDataFx.doneData, (_, payload) => payload)

export const $userInfo = combine({
  isLoading: getUserDataFx.pending,
  userData: $userData
})