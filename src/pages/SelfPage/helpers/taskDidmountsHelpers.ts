import { TaskStore } from "stores";
import { StoreTypes } from "types";

export const handleStop = (taskStore: StoreTypes.ITaskMock) => {
  if (taskStore.status !== "Выполняется") {
    taskStore.status = "Выполняется";
  } else {
    taskStore.status = "Приостановлена";
  }
  TaskStore.changeStatus(taskStore);
};

export const handleEnd = (taskStore: StoreTypes.ITaskMock) => {
  taskStore.status = "Завершена";
  TaskStore.changeStatus(taskStore);
};

export const handleActivity = (taskStore: StoreTypes.ITaskMock) => {
  taskStore.isActive = false;
  TaskStore.changeActiveTask(taskStore);
};
