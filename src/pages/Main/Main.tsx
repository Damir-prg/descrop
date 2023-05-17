import React, { useEffect } from "react";
import { StartWrapper } from "layots";
import { Loader } from "components";
import { useStore } from "effector-react";
import { CommandStore } from "stores";
import { Governances, UserChartAxis } from "./components";

const Main = () => {
  const { isLoading } = useStore(CommandStore.$commandsData);

  useEffect(() => {
    CommandStore.getAllCommandFx();
  }, []);

  if (isLoading) return <Loader.Large />;

  return (
    <StartWrapper cssProps={"p-10 gap-5"}>
      <div className="w-full grid grid-cols-main-page gap-5">
        <UserChartAxis />
        <Governances />
      </div>
    </StartWrapper>
  );
};

export { Main };
