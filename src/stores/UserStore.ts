import { combine, createEffect, createEvent, createStore } from "effector";
import { StoreTypes } from "types";
import { userApi } from "API";

export const getUserDataFx = createEffect<
  { id: number },
  StoreTypes.IUser,
  Error
>({
  handler: async (data) => {
    return await userApi.getOne(data);
  },
});

export const getAllUsersDataFx = createEffect<
  void,
  Array<StoreTypes.IUser>,
  Error
>({
  handler: async () => {
    return await userApi.getAll();
  },
});

export const setNewUserinfo = createEvent<StoreTypes.IUser>();

const $allUsersData = createStore<Array<StoreTypes.IUser>>([])
  .on(getAllUsersDataFx.doneData, (_, payload) => payload)
  .on(setNewUserinfo, (store, payload) => [...store, payload]);

const $userData = createStore<StoreTypes.IUser | null>(null)
  .on(setNewUserinfo, (state, payload) => payload)
  .on(getUserDataFx.doneData, (_, payload) => payload);

export const $userInfo = combine({
  isLoading: getUserDataFx.pending && getAllUsersDataFx.pending,
  userData: $userData,
  allUsersData: $allUsersData,
});
