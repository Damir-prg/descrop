import React, { useState } from "react";
import { UI } from "components";
import { AuthStore, UserStore } from "stores";
import { handleFormSubmit } from "../helpers";
import { isContains } from "helpers";

import { useStore } from "effector-react";

const CreateCommandForm = () => {
  const { departments } = useStore(AuthStore.$companyData);
  const { userData, allUsersData } = useStore(UserStore.$userInfo);
  const [selectedUsers, setSelectedUsers] = useState<Array<number>>([]);
  const users = allUsersData.filter((el) => el.id !== userData?.id);

  if (userData === null) return <></>;

  return (
    <form
      className="flex flex-col items-center justify-center gap-2 bg-mainBg p-8 rounded-xl w-[650px]"
      onSubmit={(e) =>
        handleFormSubmit(e, userData, departments, selectedUsers)
      }
    >
      <h2 className="text-blockBg font-light mb-3 text-2xl">
        Создание новой команды
      </h2>
      <UI.Custom.RowInput
        type={"text"}
        name={"name"}
        required={true}
        placeholder={"Введите название команды"}
      />
      <UI.Custom.RowInput
        type={"text"}
        name={"description"}
        required={true}
        placeholder={"Введите краткое описание команды"}
      />
      <h2 className="text-blockBg font-light w-full mt-1 text-left">
        Добавить участника команды:
      </h2>
      <UI.Custom.Select
        options={users.map((el) => el.initials)}
        onChange={(index) =>
          setSelectedUsers(
            !isContains<number>(users[index].id, selectedUsers)
              ? [...selectedUsers, users[index].id]
              : selectedUsers
          )
        }
      />
      <div className="flex w-full flex-row flex-wrap gap-2">
        {selectedUsers.length !== 0 &&
          selectedUsers.map((id) => (
            <div
              className="
            flex flex-row flex-nowrap p-2 bg-tnGreen rounded-xl
            justify-between items-center gap-3 w-fit text-white"
            >
              {users.find((el) => el.id === id)?.initials}{" "}
              <span
                className="px-2.5 py-0.5 rounded-[50%] border-2 hover:bg-tnGreenLight hover:text-text cursor-pointer"
                onClick={() =>
                  setSelectedUsers(selectedUsers.filter((el) => el !== id))
                }
              >
                x
              </span>
            </div>
          ))}
      </div>
      <UI.Custom.ButtonAction type={"submit"} title={"Создать новую команду"}>
        Создать
      </UI.Custom.ButtonAction>
    </form>
  );
};

export { CreateCommandForm };
