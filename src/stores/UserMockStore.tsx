import { createStore, createEvent } from "effector";
import { Users } from "consts";
import { StoreTypes } from "types";

export const setActiveUser = createEvent<StoreTypes.IUser>();
export const addUser = createEvent<StoreTypes.IUser>();
export const changeUserInfo = createEvent<StoreTypes.IUser>();

export const $allUsers = createStore<Array<StoreTypes.IUser>>(Users.mockUsers)
  .on(addUser, (store, payload) => [...store, payload])
  .on(changeUserInfo, (store, payload) => {
    const index = store.findIndex((el) => el.id === payload.id);
    if (index >= 0) {
      store[index] = payload;
      return store;
    } else return store;
  });

export const $activeUser = createStore<StoreTypes.IUser>(Users.mockUsers[0]).on(
  setActiveUser,
  (_, payload) => payload
);
