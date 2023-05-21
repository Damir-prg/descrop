import React from "react";
import { TaskByHeader } from "./TaskByHeader";
import { TaskStore } from "stores";
import { useStore } from "effector-react";
import { TaskBlock } from "./UI";

const TaskByDepartment = () => {
  const tasks = useStore(TaskStore.$allTasks);
  return (
    <>
      <TaskByHeader label={"Задачи отдела"} />
      <div className="w-full flex flex-row flex-wrap gap-5 items-center justify-start">
        {tasks.map((task) => (
          <TaskBlock task={task} />
        ))}
      </div>
    </>
  );
};

export { TaskByDepartment };
