export type TReducerUserForm = {
  name: string;
  surname: string;
  parentName: string;
  phone: string;
  jobTitle: string;
};

export enum REDUCER_ACTION_TYPE {
  NAME = "NAME",
  SURNAME = "SURNAME",
  PARENT = "PARENT",
  PHONE = "PHONE",
  JOB = "JOB",
}

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  value: string;
};
