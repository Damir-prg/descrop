import { StoreTypes, ApiTypes } from "types";

export const updateUserInfo = async (data: StoreTypes.IUser) => {
  const toUpdateData: ApiTypes.TUserUpdateInfo = {
    id: data.id,
    phone: data.phone,
    governance: data.governance,
    jobTitle: data.jobTitle,
    initials: data.initials,
    department: data.department,
  };
};
