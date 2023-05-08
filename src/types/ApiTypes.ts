import { TDepartments, TGovernance } from "./BaseTypes";

export interface TAuthGetAll {
  governance: Array<TGovernance>;
  department: Array<TDepartments>;
  logins: Array<string>;
}

export interface TRegistrationForm {
  login: string;
  initials: string;
  password: string;
  governance: string;
  department: string;
}

export interface TLoginPutData {
  login: string;
  password: string;
}

export interface TLoginPromise {
  result: boolean;
  userId: number;
}

export interface TCommandCreate {
  name: string;
  description: string;
  departmentId: number;
  managerUserId: number;
  userIds: Array<number>;
}

export interface TCommandUpdate {
  userIds: Array<number>;
  taskIds: Array<number>;
  commandId: number;
}

export interface TCommandGetOne {
  commandId: number;
}
