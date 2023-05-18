import React from "react";
import { UI } from "components";

import { Task, TaskWorks, TaskDidmount } from "./UI";

const ActiveTask = () => {
  return (
    <>
      <UI.Custom.Label isBlockLabel={true} textPosition={"center"}>
        Активная задача
      </UI.Custom.Label>
      <div className="w-full flex flex-col gap-10 p-5 rounded-xl custom__shadow-inner mt-1">
        <Task />
        <TaskWorks />
        <TaskDidmount />
      </div>
    </>
  );
};

export { ActiveTask };
