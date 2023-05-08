import { commandApi } from "API";
import {combine, createEffect, createEvent, createStore} from "effector";
import { StoreTypes } from "types";

export const getAllCommandFx = createEffect<
  void,
  Array<StoreTypes.ICommand>,
  Error
>({
  handler: async () => {
    return await commandApi.getAll();
  },
});

export const addCommand = createEvent<StoreTypes.ICommand>();

const $commands = createStore<Array<StoreTypes.ICommand>>([])
  .on(getAllCommandFx.doneData, (_, payload) => payload)
  .on(addCommand, (store, payload) => [...store, payload]);


export const $commandsData = combine({
  isLoading: getAllCommandFx.pending,
  commands: $commands
})