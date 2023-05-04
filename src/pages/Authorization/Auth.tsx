import React, { useState } from "react";
import { StartWrapper } from "layots";
import {MainConsts} from "consts";


import { Login, Registration, ChangeBlock } from "./components";
import "./styles/Auth.css";

const Auth = () => {
  const [isChanged, setIsChanged] = useState(true);

  return (
    <StartWrapper cssProps={"py-10"}>
      <h3
        className="
        text-3xl text-text custom__shadow-inner py-3
        rounded-3xl px-6 tracking-widest mb-6"
      >
        {MainConsts.LOGO}
      </h3>

      <div className="relative w-[1000px] h-[80%] shadow-lg overflow-hidden rounded-3xl">
        <div
          className={`auth-change-block shadow-lg ${isChanged ? "login" : ""}`}
        >
          <ChangeBlock change={setIsChanged} isChange={isChanged} />
        </div>
        <div
          className={`auth-login-block shadow-inner ${isChanged ? "" : "hide"}`}
        >
          <Login />
        </div>
        <div className={`auth-reg-block ${isChanged ? "hide" : ""}`}>
          <Registration />
        </div>
      </div>
    </StartWrapper>
  );
};

export { Auth };
