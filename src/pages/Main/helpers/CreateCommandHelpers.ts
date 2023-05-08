import { ApiTypes, StoreTypes, BaseTypes } from "types";
import { commandApi } from "API";
import { CommandStore } from "stores";
import React from "react";

const createNewCommand = async (data: ApiTypes.TCommandCreate) => {
  const res = await commandApi.create(data);
  CommandStore.addCommand(res);
};

const findDepartmentId = (
  userData: StoreTypes.IUser,
  departments: Array<BaseTypes.TDepartments>
) => {
  let departmentId = 14;
  if (userData)
    departments.forEach((el) => {
      const department = el.departments.find(
        (el) => el.name === userData.department
      );
      if (department) departmentId = department.id;
    });
  return departmentId;
};

export const handleFormSubmit = (
  event: React.FormEvent<HTMLFormElement>,
  userData: StoreTypes.IUser,
  departments: Array<BaseTypes.TDepartments>,
  userIds: Array<number>
) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const newCommandData: ApiTypes.TCommandCreate = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    managerUserId: userData ? userData.id : 1,
    userIds: [...userIds, userData.id],
    departmentId: findDepartmentId(userData, departments),
  };
  createNewCommand(newCommandData);
};
