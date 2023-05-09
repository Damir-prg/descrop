import React, { useEffect } from "react";
import { StartWrapper } from "layots";
import { UI, Loader } from "components";
import { useStore } from "effector-react";
import { CommandStore } from "stores";
import { Commands, CreateModalBlock } from "./components";

const Main = () => {
  const { isLoading } = useStore(CommandStore.$commandsData);

  useEffect(() => {
    CommandStore.getAllCommandFx();
  }, []);

  if (isLoading) return <Loader.Large />;

  return (
    <StartWrapper cssProps={"p-10 gap-5"}>
      <UI.Custom.Label isBlockLabel={true} textPosition={"left"}>
        Команды
      </UI.Custom.Label>
      <Commands />
      <CreateModalBlock/>
    </StartWrapper>
  );
};

export { Main };
