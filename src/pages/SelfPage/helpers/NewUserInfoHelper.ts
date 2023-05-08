import { StoreTypes, ApiTypes } from "types";
import { userApi } from "API";
import { UserStore } from "stores";

export const updateUserInfo = async (data: StoreTypes.IUser) => {
  const toUpdateData: ApiTypes.TUserUpdateInfo = {
    id: data.id,
    phone: data.phone,
    governance: data.governance,
    jobTitle: data.jobTitle,
    initials: data.initials,
    department: data.department,
  };

  await userApi.updateInfo(toUpdateData);
  UserStore.getUserDataFx({ id: data.id });
};
