import { StoreTypes } from "types";
import { TReducerUserForm, REDUCER_ACTION_TYPE, ReducerAction } from "../types";

export const reducerDispatch = (
  state: TReducerUserForm,
  action: ReducerAction
): TReducerUserForm => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.NAME:
      return { ...state, name: action.value };
    case REDUCER_ACTION_TYPE.SURNAME:
      return { ...state, surname: action.value };
    case REDUCER_ACTION_TYPE.PARENT:
      return { ...state, parentName: action.value };
    case REDUCER_ACTION_TYPE.JOB:
      return { ...state, jobTitle: action.value };
    case REDUCER_ACTION_TYPE.PHONE:
      return { ...state, phone: action.value };
    default:
      throw new Error("Reducer action type not found!");
  }
};

export const reducerInitialState = (
  data: StoreTypes.IUser
): TReducerUserForm => {
  return {
    name: data.initials.split(" ")[1],
    surname: data.initials.split(" ")[0],
    parentName: data.initials.split(" ")[2],
    phone: data.phone || "",
    jobTitle: data.jobTitle,
  };
};
