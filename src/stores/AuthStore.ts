import {combine, createEffect, createEvent, createStore} from "effector";
import { autorizationApi } from "API";
import { BaseTypes, ApiTypes } from "types";

export const getCompanyDataFx = createEffect<void, ApiTypes.TAuthGetAll, Error>(
  {
    handler: async () => {
      return await autorizationApi.getAll();
    },
  }
);

const $logins = createStore<Array<string>>([]).on(
  getCompanyDataFx.doneData,
  (_, payload) => payload.logins
)

const $governance = createStore<Array<BaseTypes.TGovernance>>([]).on(
  getCompanyDataFx.doneData,
  (_, payload) => payload.governance
);
const $departments = createStore<Array<BaseTypes.TDepartments>>([]).on(
  getCompanyDataFx.doneData,
  (_, payload) => payload.department
);

export const changeStatus = createEvent();

export const $authStatus = createStore<boolean>(false).on(
  changeStatus,
  (state, _) => !state
);

export const $companyData = combine({
  isLoading: getCompanyDataFx.pending,
  governance: $governance,
  departments: $departments,
  logins: $logins
})
