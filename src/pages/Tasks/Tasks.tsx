import React, { useState } from "react";
import { UI, MyTasks } from "../../components";

const Tasks = () => {
  const [filterIndexChange, setFilterIndexChange] = useState(0);
  return (
    <div className="w-full h-full flex flex-col items-center justify-start py-6 gap-5">
      <div className="flex flex-row flex-wrap w-full px-16 ">
        <UI.Custom.Select
          options={[ "Сначала мои", "Сначала управление",]}
          onChange={(index) => setFilterIndexChange(index)}
        />
      </div>
      <div className={`flex w-full px-16 ${filterIndexChange === 0 ? "flex-col" : "flex-col-reverse"}`}>
        <div>
          <UI.Custom.Label isBlockLabel={true}>Мои задачи</UI.Custom.Label>
          <MyTasks />
        </div>
        <div>
          <UI.Custom.Label isBlockLabel={true}>Задачи команды</UI.Custom.Label>
          <MyTasks />
        </div>
        <div>
          <UI.Custom.Label isBlockLabel={true}>Задачи отдела</UI.Custom.Label>
          <MyTasks />
        </div>
        <div>
          <UI.Custom.Label isBlockLabel={true}>
            Задачи Управления
          </UI.Custom.Label>
          <MyTasks />
        </div>
      </div>
    </div>
  );
};

export { Tasks };
