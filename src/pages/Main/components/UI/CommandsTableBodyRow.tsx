import React from "react";
import { useStore } from "effector-react";
import { StoreTypes } from "types";
import { UserStore } from "stores";

const CommandsTableBodyRow = ({
  command,
}: {
  command: StoreTypes.ICommand;
}) => {
  const { allUsersData } = useStore(UserStore.$userInfo);
  const user = allUsersData.find((user) => user.id === command.managerUserId);

  return (
    <tr
      key={Math.random()}
      className="grid grid-cols-command-table hover:bg-tnGreenLight cursor-pointer"
    >
      <td align={"center"} className="p-2 border-r-2">
        {command.name}
      </td>
      <td align={"center"} className="p-2 border-r-2">
        {command.description}
      </td>
      <td align={"center"} className="p-2 border-r-2">
        {user?.initials}
      </td>
      <td align={"center"} className="p-2 ">
        {command.userIds.length}
      </td>
    </tr>
  );
};

export { CommandsTableBodyRow };
