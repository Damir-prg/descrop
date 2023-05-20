import React from "react";
import { __ComponentsTypes } from "../../types";

const UserListTableRow = ({ user }: __ComponentsTypes.TTableRow) => {
  return (
    <tr>
      <td>{user.initials}</td>
      <td>{user.phone}</td>
      <td>{user.commandName}</td>
      <td align={"center"}>{user.activeProjects}</td>
    </tr>
  );
};

export { UserListTableRow };
