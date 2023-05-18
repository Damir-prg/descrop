import React, { FC, useMemo, useState } from "react";
import { ApiTypes } from "types";
import { UI } from "components";
import { AuthStore, UserStore } from "stores";
import { isContains, getDepartment } from "helpers";
import { getFormData, register } from "../helpers";
import { useStore } from "effector-react";

const Registration: FC<{ isChanged: boolean }> = ({ isChanged }) => {
  const { isLoading, governance, departments } = useStore(
    AuthStore.$companyData
  );
  const users = useStore(UserStore.$allUsers);
  const logins = useMemo(() => users.map((el) => el.login), [users]);
  const [selectedGovernance, setSelectedGovernance] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectDepartments, setSelectDepartments] = useState<string[]>([]);
  const [isRegistred, setIsRegistred] = useState<boolean>(false);
  const governanceTitles = governance.map((el) => el.title);

  // React.ChangeEvent<HTMLSelectElement>
  const handleGovernanceChange = (index: number) => {
    const department = getDepartment(governance, departments, index);
    setSelectDepartments(department);
    setSelectedGovernance(governance[index].title);
  };

  const handleDepartmentChange = (index: number) => {
    setSelectedDepartment(selectDepartments[index]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputData = getFormData(event);
    if (!isContains<string>(inputData.login, logins)) {
      const formData: ApiTypes.TRegistrationForm = {
        login: inputData.login,
        initials: inputData.initials,
        password: inputData.password,
        governance: selectedGovernance,
        department: selectedDepartment,
      };
      register(formData, setIsRegistred, users.length - 1);
    } else {
      alert("Пользователь с таким логином уже существует");
    }
  };

  if (isLoading) return <></>;

  return (
    <form
      className={`auth-reg-block ${isChanged ? "hide" : ""}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className="text-orange font-[200] tracking-widest text-3xl">
        Регистрация
      </h1>
      <UI.Custom.RowInput
        type="text"
        placeholder="Введите логин"
        name="login"
        required={true}
      />
      <UI.Custom.RowInput
        type="text"
        placeholder="Введите ФИО"
        name="initials"
        required={true}
      />
      <div className="flex flex-row justify-between w-full gap-2">
        <UI.Custom.Select
          options={governanceTitles}
          placeholder="Выбрать управление"
          onChange={handleGovernanceChange}
        />
        <UI.Custom.Select
          options={selectDepartments}
          placeholder="Выбрать отдел"
          onChange={handleDepartmentChange}
        />
      </div>
      <UI.Custom.RowInput
        type="password"
        placeholder="Введите пароль"
        name="password"
        required={true}
      />
      <UI.Custom.ButtonAction
        type="submit"
        title="отправить данные на регистрацию"
      >
        Зарегистрироваться
      </UI.Custom.ButtonAction>
      {isRegistred && <h4>Регистрация прошла успешно!</h4>}
    </form>
  );
};

export { Registration };
