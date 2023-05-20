import React, { useEffect } from "react";
import { StartWrapper } from "layots";
import { Loader } from "components";
import { useStore } from "effector-react";
import { CommandStore } from "stores";
import { Governances, UserChartAxis, UsersList } from "./components";

const Main = () => {
  const { isLoading } = useStore(CommandStore.$commandsData);

  useEffect(() => {
    CommandStore.getAllCommandFx();
  }, []);

  if (isLoading) return <Loader.Large />;

  return (
    <StartWrapper cssProps={"p-10 gap-5"}>
      <div className="w-full grid grid-cols-main-page gap-5">
        <div className="w-full p-5">
          <UserChartAxis />
          <UsersList />
        </div>
        <Governances />
      </div>
    </StartWrapper>
  );
};

export { Main };
