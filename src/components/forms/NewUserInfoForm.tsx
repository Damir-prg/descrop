import React, { FC, useEffect, useState } from "react";
import { UI } from "../index";
import { StoreTypes, ComponentsTypes } from "../../types";
import { UserStore } from "../../stores";
import { AuthConst } from "../../consts";

const NewUserInfoForm: FC<ComponentsTypes.TNewUserInfoFrom> = ({
  prevData,
  closeModal,
}) => {
  const [data, setData] = useState<StoreTypes.IUser>(prevData);
  const [departments, setDepartments] = useState<string[]>(
    AuthConst.departments[0].departments
  );
  const [governanceIndex, setGovernanceIndex] = useState<number>(0);
  const [departmentsIndex, setDepartmentsIndex] = useState<number>(0);

  // React.ChangeEvent<HTMLSelectElement>
  const handleGovernanceChange = (index: number) => {
    const governanceIndex = index;
    setGovernanceIndex(governanceIndex);
    setDepartments(AuthConst.departments[governanceIndex].departments);
  };

  const handleDepartmentChange = (index: number) => {
    setDepartmentsIndex(index);
  };

  const setNewUserData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    setData({
      ...prevData,
      initials: formData.get("initials") as string,
      governance: AuthConst.governance[governanceIndex].title,
      department: departments[departmentsIndex],
      commandName: formData.get("commandName") as string,
      jobTitle: formData.get("jobTitle") as string,
      phone: formData.get("phone") as string,
    });
  };

  useEffect(() => {
    UserStore.setNewUserinfo(data);
  }, [data]);

  return (
    <form
      className="flex flex-col gap-2 items-center justify-center w-[650px] bg-mainBg p-8 rounded-xl"
      onSubmit={(e) => setNewUserData(e)}
    >
      <h2 className="text-blockBg font-light mb-3">Изменение личных данных</h2>
      <UI.Custom.RowInput
        type="text"
        placeholder="ФИО"
        name="initials"
        required={true}
      />
      <div className="flex flex-row justify-between w-full gap-2">
        <UI.Custom.Select
          options={AuthConst.governance.map((el) => el.title)}
          placeholder="Выбрать управление"
          onChange={handleGovernanceChange}
        />
        <UI.Custom.Select
          options={departments}
          onChange={handleDepartmentChange}
        />
      </div>
      <UI.Custom.RowInput
        type="text"
        placeholder="Команда"
        name="commandName"
        required={true}
      />
      <UI.Custom.RowInput
        type="text"
        placeholder="Должность"
        name="jobTitle"
        required={true}
      />
      <UI.Custom.RowInput
        type="tel"
        placeholder="Телефон"
        name="phone"
        required={true}
      />
      <div className={"flex flex-row gap-6 pt-2"}>
        <UI.Custom.ButtonAction type="submit">Изменить</UI.Custom.ButtonAction>
        {closeModal && (
          <UI.Custom.ButtonAction type={"button"} onClick={(e) => closeModal(false)}>
            Закрыть
          </UI.Custom.ButtonAction>
        )}
      </div>
    </form>
  );
};

export { NewUserInfoForm };
