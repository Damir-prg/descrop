import React from "react";
import { useStore } from "effector-react";
import { UserStore } from "stores";
import { UI } from "components";

const UserNumberCharacter = () => {
  const userData = useStore(UserStore.$activeUser);

  return (
    <>
      <UI.Custom.Label isBlockLabel={true}>
        Характеристика в цифрах
      </UI.Custom.Label>
      <div className={`flex flex-row flex-wrap m-5 gap-5`}>
        <UI.RowWithProps
          type={"text"}
          body={String(userData.activeProjects)}
          title={"Активно проектов"}
        />
        <UI.RowWithProps
          type={"text"}
          body={String(userData.efficiency) + "%"}
          title={"Эффективность"}
        />
        <UI.RowWithProps
          type={"text"}
          body={String(userData.rating) + "/15"}
          title={"Рейтинг"}
        />
      </div>
    </>
  );
};

export { UserNumberCharacter };
