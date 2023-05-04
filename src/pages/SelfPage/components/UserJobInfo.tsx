import React from "react";
import { useStore } from "effector-react";
import { UserStore } from "stores";
import { UI } from "components";

const UserJobInfo = () => {
  const data = useStore(UserStore.$userInfo);

  return (
    <div className="flex flex-row gap-5 flex-wrap w-full m-5 justify-center align-middle">
      <UI.RowWithProps
        type={"text"}
        body={data.governance}
        title={"Управление"}
      />
      <UI.RowWithProps type={"text"} body={data.department} title={"Отдел"} />
      <UI.RowWithProps type={"text"} body={data.jobTitle} title={"Должность"} />
      <UI.RowWithProps
        type={"text"}
        body={data.commandName}
        title={"Команда"}
      />
    </div>
  );
};

export { UserJobInfo };
