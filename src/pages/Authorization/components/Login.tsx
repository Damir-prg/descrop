import React, { useMemo, useState } from "react";
import { UI } from "components";
import { AuthStore, UserStore } from "stores";
import { useStore } from "effector-react";

const Login = () => {
  const users = useStore(UserStore.$allUsers);
  const [isLoginRight, setIsLoginRight] = useState<boolean>(true);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logins = useMemo(() => users.map((el) => el.login), [users]);

  const handleLogin = () => {
    if (logins.includes(login)) {
      if (password === users.find((el) => el.login === login)?.password) {
        const userIndex = users.findIndex((el) => el.login === login);
        UserStore.setActiveUser(users[userIndex]);
        AuthStore.changeStatus();
      } else alert("Wrong password");
    } else {
      alert("Wrong login");
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
