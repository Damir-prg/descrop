import React from 'react';
import {UI} from "components";
import {IChangeBlock} from "../types/AuthorizationTypes";

const ChangeBlock = (props: IChangeBlock) => {
  return (
    <>
      <h2 className={`font-`}>{props.isChange ? "Нет аккаунта" : "Уже есть аккаунт"} в системе?</h2>
      <span className={`text-secondText mb-6 text-center`}>Тогда перейдите на вкладку {props.isChange ? "зарегистрироваться" : "войти"}</span>
      <UI.Custom.ButtonAction
        onClick={() => props.change(!props.isChange)}
        type="button"
      >
        {props.isChange ? "Зарегистрироваться" : "Войти"}
      </UI.Custom.ButtonAction>
    </>
  );
};

export {ChangeBlock};