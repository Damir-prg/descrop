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
  userId: number
}
