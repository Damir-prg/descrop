import {createEvent, createStore} from "effector";

export const changeStatus = createEvent();

export const $authStatus = createStore<boolean>(false)
    .on(changeStatus, (state, _) => !state);