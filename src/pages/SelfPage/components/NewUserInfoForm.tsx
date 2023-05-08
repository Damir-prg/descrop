import React, { FC, useEffect, useState } from "react";
import { UI } from "components";
import { getDepartment } from "helpers";
import { updateUserInfo } from "../helpers";
import { StoreTypes, ComponentsTypes } from "types";
import { UserStore, AuthStore } from "stores";
import { useStore } from "effector-react";

const NewUserInfoForm: FC<ComponentsTypes.TNewUserInfoFrom> = ({
  prevData,
  closeModal,
}) => {
  const { governance, departments } = useStore(AuthStore.$companyData);
  const [data, setData] = useState<StoreTypes.IUser>();
  const [selectedDepartments, setSelectedDepartments] = useState<Array<string>>(
    []
  );
  const [governanceIndex, setGovernanceIndex] = useState<number>(0);
  const [departmentsIndex, setDepartmentsIndex] = useState<number>(0);

  // React.ChangeEvent<HTMLSelectElement>
  const handleGovernanceChange = (index: number) => {
    setGovernanceIndex(index);
    const department = getDepartment(governance, departments, index);

    setSelectedDepartments(department);
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
      governance: governance[governanceIndex].title,
      department: selectedDepartments[departmentsIndex],
      jobTitle: formData.get("jobTitle") as string,
      phone: formData.get("phone") as string,
    });
  };

  useEffect(() => {
    if (data) {
      UserStore.setNewUserinfo(data);
      updateUserInfo(data);
    }
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
          options={governance.map((el) => el.title)}
          placeholder="Выбрать управление"
          onChange={handleGovernanceChange}
        />
        <UI.Custom.Select
          options={selectedDepartments}
          onChange={handleDepartmentChange}
        />
      </div>
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
          <UI.Custom.ButtonAction
            type={"button"}
            onClick={() => closeModal(false)}
          >
            Закрыть
          </UI.Custom.ButtonAction>
        )}
      </div>
    </form>
  );
};

export { NewUserInfoForm };
