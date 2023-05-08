import React, { useState } from "react";
import { UI } from "components";
import { isContains } from "helpers";
import { autorizationApi } from "API";

import { AuthStore, UserStore } from "stores";
import { useStore } from "effector-react";

const Login = () => {
  const { logins } = useStore(AuthStore.$companyData);
  const [isLoginRight, setIsLoginRight] = useState<boolean | null>(true);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const authCheck = async () => {
    const res = await autorizationApi.login({ login, password });
    if (res.result) {
      UserStore.getUserDataFx({id: res.userId})
      AuthStore.changeStatus();
    } else {
      alert("Неправильный логин или пароль")
    }
  };

  const handleLogin = () => {
    setIsLoginRight(isContains<string>(login, logins));
    if (isContains<string>(login, logins)) {
      authCheck();
    }
  };

  return (
    <>
      <h1 className="text-blockBg font-[200] tracking-widest text-3xl">
        Авторизация
      </h1>
      <UI.Custom.RowInput
        type="text"
        name="login"
        placeholder="Введите логин"
        onChange={(e) => setLogin(e.currentTarget.value)}
        required={true}
      />
      {!isLoginRight && (
        <h2 className="text-red-500">Пользователя с таким логином нет!</h2>
      )}
      <UI.Custom.RowInput
        type="password"
        name="password"
        placeholder="Введите пароль"
        onChange={(e) => setPassword(e.currentTarget.value)}
        required={true}
      />
      <UI.Custom.ButtonAction
        type="button"
        title="Отправить данные на проверку и войти"
        // onClick={() => AuthStore.changeStatus()}
        onClick={() => handleLogin()}
      >
        Войти
      </UI.Custom.ButtonAction>
    </>
  );
};

export { Login };
