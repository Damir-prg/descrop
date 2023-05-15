import { combine, createEffect, createStore } from "effector";
import { taskApi } from "API";
import { StoreTypes, ApiTypes } from "types";

export const getAllTaskFx = createEffect<void, Array<StoreTypes.ITask>, Error>({
  handler: async () => {
    return await taskApi.getAll();
  },
});

export const getOneTaskFx = createEffect<
  ApiTypes.TTaskGetOne,
  StoreTypes.ITask,
  Error
>({
  handler: async (data) => {
    return await taskApi.getOne(data);
  },
});

export const createTaskFx = createEffect<
  ApiTypes.TTaskCreate,
  StoreTypes.ITask,
  Error
>({
  handler: async (data) => {
    return await taskApi.create(data);
  },
});

export const getByUserIdFx = createEffect<
  ApiTypes.TTaskGetByUserId,
  Array<StoreTypes.ITask>,
  Error
>({
  handler: async (data) => {
    return await taskApi.getByUserId(data);
  },
});

const $allTask = createStore<Array<StoreTypes.ITask>>([])
  .on(getAllTaskFx.doneData, (_, payload) => payload)
  .on(createTaskFx.doneData, (store, payload) => [...store, payload]);

const $taskByUserId = createStore<Array<StoreTypes.ITask>>([]).on(
  getByUserIdFx.doneData,
  (_, payload) => payload
);

export const $allTasks = combine({
  isLoading: getAllTaskFx.pending,
  allTask: $allTask,
  error: getAllTaskFx.fail,
});

export const $taskByUser = combine({
  isLoading: getByUserIdFx.pending,
  userTasks: $taskByUserId,
  error: getByUserIdFx.fail,
});
