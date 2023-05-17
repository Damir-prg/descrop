import { customAxios } from "./InstanceAPI";
import { ApiTypes, StoreTypes } from "types";

export const taskApi = {
  create: async (data: ApiTypes.TTaskCreate): Promise<StoreTypes.ITask> => {
    const res = await customAxios.post("task/", data);
    return res.data;
  },
  getAll: async (): Promise<Array<StoreTypes.ITask>> => {
    const res = await customAxios.get("task/");
    return res.data;
  },
  getOne: async (data: ApiTypes.TTaskGetOne): Promise<StoreTypes.ITask> => {
    const res = await customAxios.put("task/", data);
    return res.data;
  },
  getByUserId: async (
    data: ApiTypes.TTaskGetByUserId
  ): Promise<Array<StoreTypes.ITask>> => {
    const res = await customAxios.put("task/user/", data);
    return res.data;
  },
};
