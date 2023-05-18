import React from "react";
import { UI } from "components";
import { handleStop, handleEnd, handleActivity } from "../../helpers";
import { TaskStore } from "stores";
import { useStore } from "effector-react";

const TaskDidmount = () => {
  const taskStore = useStore(TaskStore.$activeTask);
  return (
    <div className="w-full flex flex-row flex-wrap items-center justify-center gap-5 custom__shadow-inner rounded-xl p-4">
      <UI.Custom.ButtonAction
        type={"button"}
        onClick={() => handleStop(taskStore)}
      >
        {taskStore.status !== "Выполняется"
          ? "Начать выполнение"
          : "Приостановить"}
      </UI.Custom.ButtonAction>
      <UI.Custom.ButtonAction
        type={"button"}
        onClick={() => handleEnd(taskStore)}
      >
        Завершить
      </UI.Custom.ButtonAction>
      <UI.Custom.ButtonAction
        type={"button"}
        onClick={() => handleActivity(taskStore)}
      >
        Сделать неактивной
      </UI.Custom.ButtonAction>
    </div>
  );
};

export { TaskDidmount };
