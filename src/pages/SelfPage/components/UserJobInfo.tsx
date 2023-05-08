import React from "react";
import { useStore } from "effector-react";
import { UserStore } from "stores";
import { UI } from "components";

const UserJobInfo = () => {
  const { userData } = useStore(UserStore.$userInfo);

  if (userData === null) return <></>

  return (
    <div className="flex flex-row gap-5 flex-wrap w-full m-5 justify-center align-middle">
      <UI.RowWithProps
        type={"text"}
        body={userData.governance}
        title={"Управление"}
      />
      <UI.RowWithProps type={"text"} body={userData.department} title={"Отдел"} />
      <UI.RowWithProps type={"text"} body={userData.jobTitle} title={"Должность"} />
      <UI.RowWithProps
        type={"text"}
        body={userData.commandName ? userData.commandName : "Команды нет"}
        title={"Команда"}
      />
    </div>
  );
};

export { UserJobInfo };
