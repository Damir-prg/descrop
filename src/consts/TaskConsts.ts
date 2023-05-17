import { StoreTypes } from "types";

export const initialActiveTask: StoreTypes.ITaskMock = {
  id: 0,
  name: "Разработать фильтр",
  description: "Описание задачи",
  timeToEnd: 160,
  passedTime: 6,
  type: "self",
  fixedworks: [
    { name: "Добавлен lyout", time: 2, taskId: 1 },
    { name: "Добавлены input'ы", time: 4, taskId: 1 },
  ],
  isActive: true,
  status: "Выполняется",
  executerName: "Иванов Иван Иванович",
};

const commandTask = JSON.parse(
  JSON.stringify(initialActiveTask)
) as StoreTypes.ITaskMock;
commandTask.commandId = 1;
commandTask.isActive = false;
commandTask.executerName = "Орлов Дмитрий Валерикович";
commandTask.name = "Задача команды";
export const initialTasks: Array<StoreTypes.ITaskMock> = [initialActiveTask];
