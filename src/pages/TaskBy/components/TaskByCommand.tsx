import React, { useMemo } from "react";
import { TaskByHeader } from "./TaskByHeader";
import { TaskStore, UserStore } from "stores";
import { useStore } from "effector-react";
import { TaskBlock } from "./UI";

const TaskByCommand = () => {
  const tasks = useStore(TaskStore.$allTasks);
  const user = useStore(UserStore.$activeUser);
  const tasksByCommandId = useMemo(
    () => tasks.filter((task) => task.commandId === user.commandId),
    [user]
  );

  return (
    <>
      <TaskByHeader label={"Задачи команды"} />
      <div className="w-full flex flex-row flex-wrap gap-5 items-center justify-start">
        {tasksByCommandId.map((task) => (
          <TaskBlock task={task} />
        ))}
      </div>
    </>
  );
};

export { TaskByCommand };
