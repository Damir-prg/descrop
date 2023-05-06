import { ApiTypes } from "types";
import { customAxios } from "./InstanceAPI";

export const autorizationApi = {
  getAll: async (): Promise<ApiTypes.TAuthGetAll> => {
    const res = await customAxios.get("autorization/");
    return res.data;
  },
  registration: async (
    data: ApiTypes.TRegistrationForm
  ): Promise<ApiTypes.TRegistrationForm | null> => {
    const res = await customAxios.post("user/", data);
    return res.data;
  },
};
