import React, { useState } from "react";
import { UI } from "components";
import { AuthConst } from "consts";

const Registration = () => {
  const [departments, setDepartments] = useState<string[]>(
    AuthConst.departments[0].departments
  );
  // React.ChangeEvent<HTMLSelectElement>
  const sortByGovernanceChange = (index: number) => {
    const governanceIndex = index;
    setDepartments(AuthConst.departments[governanceIndex].departments);
  };

  return (
    <>
      <h1 className="text-orange font-[200] tracking-widest text-3xl">
        Регистрация
      </h1>
      <UI.Custom.RowInput type="text" placeholder="Введите логин" />
      <UI.Custom.RowInput type="text" placeholder="Введите пароль" />
      <UI.Custom.RowInput type="password" placeholder="Повторите пароль" />
      <div className="flex flex-row justify-between w-full gap-2">
        <UI.Custom.Select
          options={AuthConst.governance.map((el) => el.title)}
          placeholder="Выбрать управление"
          onChange={sortByGovernanceChange}
        />
        <UI.Custom.Select options={departments} />
      </div>
      <UI.Custom.ButtonAction
        type="button"
        title="Отправить данные на проверку и войти"
      >
        Зарегистрироваться
      </UI.Custom.ButtonAction>
    </>
  );
};

export { Registration };
