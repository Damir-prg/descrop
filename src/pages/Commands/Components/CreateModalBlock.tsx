import React, { useState } from "react";
import { UI } from "components";
import { CreateCommandForm } from "./CreateCommandForm";

const CreateModalBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <UI.Custom.ButtonAction
        type={"button"}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Создать команду
      </UI.Custom.ButtonAction>
      {isModalOpen && (
        <UI.ModalWrapper isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <CreateCommandForm />
        </UI.ModalWrapper>
      )}
    </>
  );
};

export { CreateModalBlock };
