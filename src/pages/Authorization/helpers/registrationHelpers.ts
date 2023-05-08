import {ApiTypes} from "types";
import React from "react";
import {AuthStore} from "stores";
import {autorizationApi} from "../../../API";


const getFormData = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const formData = new FormData(event.target as HTMLFormElement);
  return {
    login: formData.get("login") as string,
    initials: formData.get("initials") as string,
    password: formData.get("password") as string
  }

};

const register = async (data: ApiTypes.TRegistrationForm, setIsRegistred: (bool: boolean) => void) => {
  const res = await autorizationApi.registration(data);
  if (res != null) {
    setIsRegistred(true);
    AuthStore.addLogin(data.login)
  } else {
    alert("Ошибка при регистрации, попробуйте позже :(");
  }
};

export {getFormData, register}
