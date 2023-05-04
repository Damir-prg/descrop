import React from "react";
import { UI } from "components";

import { AuthStore } from "stores";

const Login = () => {
  return (
    <>
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
    </>
  );
};

export { Login };
