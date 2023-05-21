import React from "react";
import { useStore } from "effector-react";
import { CommandStore } from "stores";
import { CommandsTableHeadTd, CommandsTableBodyRow } from "./UI";

import "../styles/Commands.css";

const Commands = ({ id }: { id: string }) => {
  const commands = useStore(CommandStore.$commands);
  const filteredCommands = commands.filter(
    ({ departmentId }) => String(departmentId) === id
  );

  return (
    <div className="w-full h-fit flex flex-col align-middle justify-center gap-5 p-2 custom__shadow-inner rounded-xl">
      {filteredCommands.length !== 0 && (
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-command-table">
              <CommandsTableHeadTd text={"Наименование"} />
              <CommandsTableHeadTd text={"Описание"} />
              <CommandsTableHeadTd text={"Руководитель команды"} />
              <CommandsTableHeadTd isLast={true} text={"Число участников"} />
            </tr>
          </thead>
          <tbody>
            {filteredCommands.map((command) => (
              <CommandsTableBodyRow command={command} key={Math.random()} />
            ))}
          </tbody>
        </table>
      )}
      {filteredCommands.length === 0 && (
        <span className="w-full flex items-center justify-center text-2xl">
          Команд на данный момент нет
        </span>
      )}
    </div>
  );
};

export { Commands };
