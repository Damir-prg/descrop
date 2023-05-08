import { customAxios } from "./InstanceAPI";
import { ApiTypes, StoreTypes } from "types";

export const commandApi = {
  create: async (
    data: ApiTypes.TCommandCreate
  ): Promise<StoreTypes.ICommand> => {
    const res = await customAxios.post("commands/", data);
    return res.data;
  },
  getAll: async (): Promise<Array<StoreTypes.ICommand>> => {
    const res = await customAxios.get("commands/");
    return res.data;
  },
  getOne: async (
    data: ApiTypes.TCommandGetOne
  ): Promise<StoreTypes.ICommand> => {
    const res = await customAxios.put("commands/one/", data);
    return res.data;
  },
  update: async (data: ApiTypes.TCommandUpdate): Promise<Array<number>> => {
    const res = await customAxios.put("commands/update/", data);
    return res.data;
  },
};
