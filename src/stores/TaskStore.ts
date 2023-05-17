import { createEvent, createStore } from "effector";
import { StoreTypes } from "types";
import { TaskConsts } from "consts";

export const changeActiveTask = createEvent<StoreTypes.ITaskMock>();
export const addFixedWork = createEvent<StoreTypes.TFixedWork>();
export const addTask = createEvent<StoreTypes.ITaskMock>();

export const changeStatus = createEvent<StoreTypes.ITaskMock>();

export const $allTasks = createStore<Array<StoreTypes.ITaskMock>>(
  TaskConsts.initialTasks
)
  .on(changeActiveTask, (store, payload) =>
    store.map((el) => {
      if (el.id !== payload.id) {
        el.isActive = false;
        return el;
      } else {
        el.isActive = true;
        return el;
      }
    })
  )
  .on(addTask, (store, payload) => [...store, payload])
  .on(addFixedWork, (store, payload) =>
    store.map((el) => {
      if (el.id === payload.taskId) {
        el.passedTime =
          el.fixedworks
            .map((fEl) => fEl.time)
            .reduce((sum, sEl) => {
              return sum + sEl;
            }, 0) + payload.time;
        el.fixedworks.push(payload);
        return el;
      } else {
        return el;
      }
    })
  )
  .on(changeStatus, (store, payload) =>
    store.map((el) => {
      if (el.id !== payload.id) {
        return el;
      } else {
        el.status = payload.status;
        return el;
      }
    })
  );

export const $activeTask = $allTasks.map(
  (store) => store.filter((el) => el.isActive)[0]
);
