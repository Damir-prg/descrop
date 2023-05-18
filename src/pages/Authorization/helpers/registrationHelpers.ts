import { ApiTypes, StoreTypes } from "types";
import React from "react";
import { UserStore } from "stores";

const getFormData = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  return {
    login: formData.get("login") as string,
    initials: formData.get("initials") as string,
    password: formData.get("password") as string,
  };
};

const register = async (
  data: ApiTypes.TRegistrationForm,
  setIsRegistred: (bool: boolean) => void,
  id: number
) => {
  const newUser: StoreTypes.IUser = {
    id: id,
    login: data.login,
    initials: data.initials,
    password: data.password,
    governance: data.governance,
    department: data.department,
    jobTitle: "",
    efficiency: 0,
    rating: 0,
    activeProjects: 0,
    commandName: null,
    phone: null,
    commandId: null,
    speed: 3,
    quality: 3,
    understanding: 3,
    sociability: 3,
    knowledge: 3,
    updatedAt: "",
    createdAt: "",
  };
  UserStore.addUser(newUser);
};

export { getFormData, register };
