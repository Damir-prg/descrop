import { StoreTypes, ApiTypes } from "types";
import { customAxios } from "./InstanceAPI";

export const userApi = {
  getOne: async (data: { id: number }): Promise<StoreTypes.IUser> => {
    const res = await customAxios.put("user/one/", data);
    return res.data;
  },
  getAll: async (): Promise<Array<StoreTypes.IUser>> => {
    const res = await customAxios.get("user/");
    return res.data;
  },
  updateInfo: async (data: ApiTypes.TUserUpdateInfo) => {
    const res = await customAxios.put("user/update/info/", data);
    return res.data;
  },
};
