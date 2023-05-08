import React from "react";
import { useStore } from "effector-react";
import { CommandStore } from "stores";
import { CommandsTableHeadTd, CommandsTableBodyRow } from "./UI";

import "../styles/Commands.css";

const Commands = () => {
  const { commands } = useStore(CommandStore.$commandsData);

  return (
    <div className="w-full h-fit flex flex-col align-middle justify-center gap-5 p-2 custom__shadow-inner rounded-xl">
      {commands.length !== 0 && (
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
            {commands.map((command) => <CommandsTableBodyRow command={command}/>)}
          </tbody>
        </table>
      )}
    </div>
  );
};

export { Commands };
