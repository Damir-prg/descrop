import React, { useEffect, useState } from "react";
import { StartWrapper } from "layots";
import { UI, Loader } from "components";
import { useStore } from "effector-react";
import { CommandStore } from "stores";
import {Commands, CreateCommandForm} from "./components";

const Main = () => {
  const { isLoading } = useStore(CommandStore.$commandsData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
      <UI.Custom.ButtonAction
        type={"button"}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Создать команду
      </UI.Custom.ButtonAction>
      {isModalOpen && (
        <UI.ModalWrapper
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        >
          <CreateCommandForm/>
        </UI.ModalWrapper>
      )}
    </StartWrapper>
  );
};

export { Main };
