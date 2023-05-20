import React from "react";
import { UserStore } from "stores";
import { useStore } from "effector-react";
import { UserListTableRow } from "./UserListTableRow";
import { UserListTableThead } from "./UserListTableThead";
import "../../style/UserListTable.css";

const UserListTable = () => {
  const allUsers = useStore(UserStore.$allUsers);
  return (
    <div className="w-full h-fit p-5 custom__shadow-inner rounded-xl">
      <table className="user-list-table">
        <UserListTableThead />
        <tbody className="user-list-table__tbody">
          {allUsers.map((user) => (
            <UserListTableRow user={user} key={Math.random()} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { UserListTable };
