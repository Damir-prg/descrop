import {ApiTypes, BaseTypes} from "types";
import React from "react";
import {autorizationApi} from "../../../API";


const getDepartment = (
  governance: Array<BaseTypes.TGovernance>,
  departments: Array<BaseTypes.TDepartments>,
  index: number
): Array<string> => {
  const department = departments.find(
    (el) => el.governanceKey === governance[index].key
  );

  if (department) return department.departments
  return []
};

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
  } else {
    alert("Ошибка при регистрации, попробуйте позже :(");
  }
};

export {getDepartment, getFormData, register}
