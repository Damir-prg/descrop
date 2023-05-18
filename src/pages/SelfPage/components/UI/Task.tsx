import { TaskStore, UserStore } from "stores";
import { useStore } from "effector-react";
import { useMemo } from "react";

const Task = () => {
  const activeTask = useStore(TaskStore.$activeTask);
  const userData = useStore(UserStore.$activeUser);

  const taskStore = useMemo(() => activeTask, [activeTask]);

  return (
    <div className="w-full">
      <h4 className="font-[600] text-xl">Наименование - {taskStore.name}</h4>
      <p>Описание: {taskStore.description}</p>
      <p>Статус: {taskStore.status}</p>
      <p>Исполнитель: {userData.initials}</p>
      <table className="w-full mt-3">
        <thead>
          <tr className="border-b-2 border-white">
            <th>Постановщик</th>
            <th>Срок выполнения в часах</th>
            <th>Потрачено времени</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">{taskStore.executerName}</td>
            <td className="text-center">{taskStore.timeToEnd}</td>
            <td className="text-center">{taskStore.passedTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Task };
