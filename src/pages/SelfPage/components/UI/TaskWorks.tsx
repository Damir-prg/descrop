import React, { useState } from "react";
import { TaskStore } from "stores";
import { useStore } from "effector-react";
import { UI } from "components";
import { StoreTypes } from "types";

const TaskWorks = () => {
  const taskStore = useStore(TaskStore.$activeTask);
  const [workName, setWorkName] = useState<string>("");
  const [workTime, setWorkTime] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fixedWork: StoreTypes.TFixedWork = {
      name: workName,
      taskId: taskStore.id,
      time: Number(workTime),
    };
    TaskStore.addFixedWork(fixedWork);
    setWorkName("");
    setWorkTime("");
  };

  return (
    <>
      <UI.Custom.Label isBlockLabel={true} textPosition={"center"}>
        Зафиксированные работы
      </UI.Custom.Label>
      <ul className="w-full flex flex-col items-center justify-center gap-2">
        {taskStore.fixedworks.map((el) => (
          <li
            className="w-[50%] flex flex-row align-middle justify-between gap-10"
            key={Math.random()}
          >
            <span>{el.name}</span> <span>{el.time}</span>
          </li>
        ))}
      </ul>
      <form
        className="flex flex-col items-center justify-center w-full gap-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="w-full flex flex-row gap-5">
          <UI.Custom.RowInput
            type={"text"}
            placeholder={"Наименование работы"}
            value={workName}
            onChange={(e) => setWorkName(e.target.value)}
          />
          <UI.Custom.RowInput
            type={"text"}
            placeholder={"Потраченное время"}
            value={workTime}
            onChange={(e) => setWorkTime(e.target.value)}
          />
        </div>
        <UI.Custom.ButtonAction type={"submit"}>
          Зафиксировать работу
        </UI.Custom.ButtonAction>
      </form>
    </>
  );
};

export { TaskWorks };
