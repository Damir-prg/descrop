import React, { useState } from "react";
import { StartWrapper } from "layots";
import { UI } from "components";
import "./styles/Auth.css";
import { AuthConst } from "../../consts";
import { Link } from "react-router-dom";
import { AuthStore } from "../../stores";

const Auth = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [departments, setDepartments] = useState<string[]>(
    AuthConst.departments[0].departments
  );
  // React.ChangeEvent<HTMLSelectElement>
  const sortByGovernanceChange = (index: number) => {
    const governanceIndex = index;
    setDepartments(AuthConst.departments[governanceIndex].departments);
  };

  return (
    <StartWrapper cssProps={"py-10"}>
      <h3
        className="
        text-3xl text-text custom__shadow-inner py-3
        rounded-3xl px-6 tracking-widest mb-6"
      >
        ИС ОРПНОВОТ
      </h3>

      <div className="relative w-[1000px] h-[80%] shadow-lg overflow-hidden rounded-3xl">
        <div
          className={`auth-change-block shadow-lg ${isChanged ? "login" : ""}`}
        >
          <UI.Custom.ButtonAction
            onClick={() => setIsChanged(!isChanged)}
            type="button"
          >
            {isChanged ? "Зарегистрироваться" : "Войти"}
          </UI.Custom.ButtonAction>
        </div>
        <div
          className={`auth-login-block shadow-inner ${isChanged ? "" : "hide"}`}
        >
          <h1 className="text-blockBg font-[200] tracking-widest text-3xl">
            Авторизация
          </h1>
          <UI.Custom.RowInput type="text" placeholder="Введите логин" />
          <UI.Custom.RowInput type="password" placeholder="Введите пароль" />
          <UI.Custom.ButtonAction
            type="button"
            title="Отправить данные на проверку и войти"
            onClick={() => AuthStore.changeStatus()}
          >
            Войти
          </UI.Custom.ButtonAction>
        </div>
        <div className={`auth-reg-block ${isChanged ? "hide" : ""}`}>
          <h1 className="text-orange font-[200] tracking-widest text-3xl">
            Регистрация
          </h1>
          <UI.Custom.RowInput type="text" placeholder="Введите логин" />
          <UI.Custom.RowInput type="text" placeholder="Введите пароль" />
          <UI.Custom.RowInput type="password" placeholder="Повторите пароль" />
          <div className="flex flex-row justify-between w-full gap-2">
            <UI.Custom.Select2
              options={AuthConst.governance.map((el) => el.title)}
              placeholder="Выбрать управление"
              onChange={sortByGovernanceChange}
            />
            <UI.Custom.Select2 options={departments} />
          </div>
          <UI.Custom.ButtonAction
            type="button"
            title="Отправить данные на проверку и войти"
          >
            Зарегистрироваться
          </UI.Custom.ButtonAction>
        </div>
      </div>
    </StartWrapper>
  );
};

export { Auth };
