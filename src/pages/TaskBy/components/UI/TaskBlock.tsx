import React, { useMemo } from "react";
import { ComponentTypes } from "../../types";
import { UI } from "components";
import { UserStore } from "stores";
import { useStore } from "effector-react";

const TaskBlock = ({ task }: ComponentTypes.TTaskBlock) => {
  const users = useStore(UserStore.$allUsers);
  const activeUser = useStore(UserStore.$activeUser);
  const devUserName = useMemo(() => {
    const index = users.findIndex((user) => user.id === task.userId);
    return users[index].initials;
  }, [users]);

  return (
    <div className="w-fit  flex flex-col items-center justify-center custom__shadow-inner p-5 gap-2 rounded-xl">
      <span className="w-full custom__shadow-inner font-[300] p-2 rounded-xl text-center">
        Задача номер: {task.id}
      </span>
      <table className="task-by-table">
        <thead className="task-by-table__thead">
          <tr>
            <th align="left">Постановщик</th>
            <th align="left">Исполнитель</th>
            <th>Срок</th>
            <th>Выполнено</th>
            <th align="left">Статус</th>
          </tr>
        </thead>
        <tbody className="task-by-table__tbody">
          <tr>
            <td align="left">{task.executerName}</td>
            <td align="left">{devUserName}</td>
            <td align="center">{task.timeToEnd}</td>
            <td align="center">{task.passedTime}</td>
            <td align="left">{task.status}</td>
          </tr>
        </tbody>
      </table>
      {task.userId !== activeUser.id && (
        <UI.Custom.ButtonAction type={"button"}>
          Сделать активной
        </UI.Custom.ButtonAction>
      )}
    </div>
  );
};

export { TaskBlock };
