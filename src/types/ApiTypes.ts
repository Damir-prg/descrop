import {TDepartments, TGovernance} from "./BaseTypes";

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
