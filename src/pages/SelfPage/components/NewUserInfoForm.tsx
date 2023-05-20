import React, { FC, useMemo, useReducer, useState } from "react";
import { UI } from "components";
import { getDepartment } from "helpers";
import { reducerDispatch, reducerInitialState } from "../helpers";
import { ComponentsTypes } from "types";
import { REDUCER_ACTION_TYPE } from "../types";

import { AuthStore, UserStore } from "stores";
import { useStore } from "effector-react";

const NewUserInfoForm: FC<ComponentsTypes.TNewUserInfoFrom> = ({
  closeModal,
}) => {
  const userData = useStore(UserStore.$activeUser);
  const { governance, departments } = useStore(AuthStore.$companyData);
  const [selectedDepartments, setSelectedDepartments] = useState<Array<string>>(
    []
  );
  const [governanceIndex, setGovernanceIndex] = useState<number>(0);
  const [departmentsIndex, setDepartmentsIndex] = useState<number>(0);
  const [state, dispatch] = useReducer(
    reducerDispatch,
    reducerInitialState(userData)
  );

  const gover = useMemo(
    () => governance[governanceIndex].title,
    [governanceIndex]
  );
  const depart = useMemo(
    () => selectedDepartments[departmentsIndex],
    [departmentsIndex]
  );

  const handleGovernanceChange = (index: number) => {
    setGovernanceIndex(index);
    const department = getDepartment(governance, departments, index);

    setSelectedDepartments(department);
  };

  return (
    <form className="flex flex-col gap-2 items-center justify-center w-[90%] max-w-[700px] bg-mainBg p-8 rounded-xl">
      <h2 className="text-blockBg font-light mb-3">Изменение личных данных</h2>
      <div className="w-full flex flex-row gap-2">
        <UI.Custom.RowInput
          type="text"
          value={state.surname}
          onChange={(e) =>
            dispatch({
              type: REDUCER_ACTION_TYPE.SURNAME,
              value: e.target.value,
            })
          }
          placeholder="Фамилия"
          required={true}
        />
        <UI.Custom.RowInput
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: REDUCER_ACTION_TYPE.NAME,
              value: e.target.value,
            })
          }
          placeholder="Имя"
          required={true}
        />
        <UI.Custom.RowInput
          type="text"
          value={state.parentName}
          onChange={(e) =>
            dispatch({
              type: REDUCER_ACTION_TYPE.PARENT,
              value: e.target.value,
            })
          }
          placeholder="Отчество"
          required={true}
        />
      </div>
      <div className="flex flex-row justify-between w-full gap-2">
        <UI.Custom.Select
          options={governance.map((el) => el.title)}
          placeholder="Выбрать управление"
          onChange={handleGovernanceChange}
        />
        <UI.Custom.Select
          options={selectedDepartments}
          onChange={(i) => setDepartmentsIndex(i)}
        />
      </div>
      <UI.Custom.RowInput
        type="text"
        placeholder="Должность"
        value={state.jobTitle}
        onChange={(e) =>
          dispatch({ type: REDUCER_ACTION_TYPE.JOB, value: e.target.value })
        }
        required={true}
      />
      <UI.Custom.RowInput
        type="tel"
        placeholder="Телефон"
        value={state.phone}
        onChange={(e) =>
          dispatch({ type: REDUCER_ACTION_TYPE.PHONE, value: e.target.value })
        }
        required={true}
      />
      <div className={"flex flex-row gap-6 pt-2"}>
        <UI.Custom.ButtonAction type="submit">Изменить</UI.Custom.ButtonAction>
        {closeModal && (
          <UI.Custom.ButtonAction
            type={"button"}
            onClick={() => closeModal(false)}
          >
            Закрыть
          </UI.Custom.ButtonAction>
        )}
      </div>
    </form>
  );
};

export { NewUserInfoForm };
