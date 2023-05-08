import {StoreTypes} from "types";
import {customAxios} from "./InstanceAPI";


export const userApi = {
  getOne: async (data: {id: number}): Promise<StoreTypes.IUser> => {
    const res = await customAxios.put("user/one/", data)
    return res.data;
  }
}