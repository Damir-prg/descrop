import React from "react";
import { UI } from "components";
import { UserListTable } from "./UI";

const UsersList = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <UI.Custom.Label isBlockLabel={true} textPosition={"center"}>
        Мой отдел
      </UI.Custom.Label>
      <UserListTable />
    </div>
  );
};

export { UsersList };
