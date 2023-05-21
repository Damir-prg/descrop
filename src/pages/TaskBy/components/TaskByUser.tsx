import React, { useMemo } from "react";
import { TaskByHeader } from "./TaskByHeader";
import { TaskStore, UserStore } from "stores";
import { useStore } from "effector-react";
import { TaskBlock } from "./UI";

const TaskByUser = () => {
  const tasks = useStore(TaskStore.$allTasks);
  const user = useStore(UserStore.$activeUser);
  const tasksByUserId = useMemo(
    () => tasks.filter((task) => task.userId === user.id),
    [user]
  );

  return (
    <>
      <TaskByHeader label={"Мои задачи "} />
      <div className="w-full flex flex-row flex-wrap gap-5 items-center justify-start">
        {tasksByUserId.map((task) => (
          <TaskBlock task={task} />
        ))}
      </div>
    </>
  );
};

export { TaskByUser };
