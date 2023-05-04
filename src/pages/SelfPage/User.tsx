import { UserStore } from "stores";
import { useStore } from "effector-react";
import { UI, forms } from "components";
import {
  UserCard,
  UserChart,
  UserJobInfo,
  UserNumberCharacter,
  UserChartAxis,
} from "./components";

import React, { useState } from "react";

const User = () => {
  const userData = useStore(UserStore.$userInfo);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col align-top justify-items-start py-6 px-6 gap-5">
      <div className="grid grid-cols-2 grid gap-5 w-full">
        <div className="w-full flex items-center flex-col">
          <UI.Custom.Label isBlockLabel={true}>
            Диаграмма краткой характеристики
          </UI.Custom.Label>
          <UserChart size={400} />
        </div>
        <div className="w-full flex items-center flex-col">
          <UI.Custom.Label isBlockLabel={true}>Профиль</UI.Custom.Label>
          <UserCard data={userData} />
          <UI.Custom.Label isBlockLabel={true}>
            Данные о месте работы
          </UI.Custom.Label>
          <UserJobInfo />
          <UI.Custom.ButtonAction
            type={"button"}
            onClick={(e) => setIsModalOpen(true)}
          >
            Редактировать
          </UI.Custom.ButtonAction>
          <br />
          <UI.Custom.Label isBlockLabel={true}>
            Характеристика в цифрах
          </UI.Custom.Label>
          <UserNumberCharacter />
        </div>
      </div>
      <UI.Custom.Label isBlockLabel={true} textPosition={"center"}>
        Диаграмма продуктивности на проектах (часы/проект)
      </UI.Custom.Label>
      <UserChartAxis />

      {/*  MODAL */}
      <UI.ModalWrapper isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <forms.NewUserInfoForm prevData={userData} closeModal={setIsModalOpen}/>
      </UI.ModalWrapper>
    </div>
  );
};

export { User };
