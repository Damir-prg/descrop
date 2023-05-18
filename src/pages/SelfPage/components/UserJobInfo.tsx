import React, { useState } from "react";
import { useStore } from "effector-react";
import { UserStore } from "stores";
import { UI } from "components";
import { NewUserInfoForm } from "./NewUserInfoForm";

const UserJobInfo = () => {
  const userData = useStore(UserStore.$activeUser);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <UI.Custom.Label isBlockLabel={true}>
        Данные о месте работы
      </UI.Custom.Label>
      <div className="flex flex-row gap-5 flex-wrap w-full m-5 justify-center align-middle">
        <UI.RowWithProps
          type={"text"}
          body={userData.governance}
          title={"Управление"}
        />
        <UI.RowWithProps
          type={"text"}
          body={userData.department}
          title={"Отдел"}
        />
        <UI.RowWithProps
          type={"text"}
          body={userData.jobTitle}
          title={"Должность"}
        />
        <UI.RowWithProps
          type={"text"}
          body={userData.commandName ? userData.commandName : "Команды нет"}
          title={"Команда"}
        />
      </div>
      <UI.Custom.ButtonAction
        type={"button"}
        onClick={() => setIsModalOpen(true)}
      >
        Редактировать
      </UI.Custom.ButtonAction>
      <br />
      {/*  MODAL */}
      <UI.ModalWrapper isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        {userData && (
          <NewUserInfoForm prevData={userData} closeModal={setIsModalOpen} />
        )}
      </UI.ModalWrapper>
    </>
  );
};

export { UserJobInfo };
