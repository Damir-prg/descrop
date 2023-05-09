import React, { useEffect } from "react";
import { StartWrapper } from "layots";
import { UI, Loader } from "components";
import { useStore } from "effector-react";
import { AuthStore, CommandStore } from "stores";
import {   Governances } from "./components";

const Main = () => {
  const { isLoading } = useStore(CommandStore.$commandsData);
  const { governance, departments } = useStore(AuthStore.$companyData);

  useEffect(() => {
    CommandStore.getAllCommandFx();
  }, []);

  if (isLoading) return <Loader.Large />;

  return (
    <StartWrapper cssProps={"p-10 gap-5"}>
      <UI.Custom.Label isBlockLabel={true} textPosition={"left"}>
        Управления
      </UI.Custom.Label>
      {governance.map((el) => (
        <Governances
          governance={el}
          departments={
            departments.filter((dEl) => dEl.governanceKey === el.key)[0]
          }
        />
      ))}
    </StartWrapper>
  );
};

export { Main };
