import { createEvent, createStore } from "effector";
import { StoreTypes } from "types";
import { Commands } from "consts";

export const addCommand = createEvent<StoreTypes.ICommand>();

export const addTaskById = createEvent<{ commandId: number; taskId: number }>();
const addTaskByIdDispatch = (
  store: Array<StoreTypes.ICommand>,
  payload: { commandId: number; taskId: number }
): Array<StoreTypes.ICommand> => {
  const neededCommand = store.findIndex((el) => el.id === payload.commandId);
  if (neededCommand !== -1) {
    store[neededCommand].taskIds.push(payload.taskId);
    return store;
  } else {
    throw new Error(
      `Error at the CommandStore: not found command with id ${payload.commandId}`
    );
  }
};

export const addUserById = createEvent<{ commandId: number; userId: number }>();
const addUserByIdDispatch = (
  store: Array<StoreTypes.ICommand>,
  payload: { commandId: number; userId: number }
): Array<StoreTypes.ICommand> => {
  const neededCommand = store.findIndex((el) => el.id === payload.commandId);
  if (neededCommand !== -1) {
    store[neededCommand].userIds.push(payload.userId);
    return store;
  } else {
    throw new Error(
      `Error at the CommandStore: not found command with id ${payload.commandId}`
    );
  }
};

export const $commands = createStore<Array<StoreTypes.ICommand>>(
  Commands.mockCommands
)
  .on(addCommand, (store, payload) => [...store, payload])
  .on(addTaskById, addTaskByIdDispatch)
  .on(addUserById, addUserByIdDispatch);
