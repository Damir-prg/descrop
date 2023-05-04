import React from "react";
import { useStore } from "effector-react";
import { UserStore } from "stores";
import { UI } from "components";

const UserNumberCharacter = () => {
  const data = useStore(UserStore.$userInfo);
  return (
    <div className={`flex flex-row flex-wrap m-5 gap-5`}>
      <UI.RowWithProps
        type={"text"}
        body={String(data.activeProjects)}
        title={"Активно проектов"}
      />
      <UI.RowWithProps
        type={"text"}
        body={String(data.efficiency) + "%"}
        title={"Эффективность"}
      />
      <UI.RowWithProps
        type={"text"}
        body={String(data.rating) + "/15"}
        title={"Рейтинг"}
      />
    </div>
  );
};

export { UserNumberCharacter };
