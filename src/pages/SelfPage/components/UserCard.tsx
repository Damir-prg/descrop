import React, { FC } from "react";
import { UI } from "components";
import { ComponentsTypes } from "types";

const UserCard: FC<ComponentsTypes.TUserCard> = ({ data }) => {
  const mockInitials = data.initials.split(" ");
  const mockTitles = ["Фамилия", "Имя", "Отчество"];
  return (
    <>
      <UI.Custom.Label isBlockLabel={true}>Профиль</UI.Custom.Label>
      <div
        className="
            w-full h-fit
            bg-secondBg
            rounded-lg
            py-4 px-4
            flex flex-row gap-5
            items-center
            justify-center
            "
      >
        <div className="flex flex-row gap-4 text-mainText items-center ">
          <div
            className={`
                    w-40 h-40 rounded-[50%] flex items-center justify-center custom__shadow-inner
                    `}
          >
            IMAGE
          </div>
        </div>
        <div className="flex flex-col justify-center h-full gap-2">
          {mockInitials.map((init, index) => (
            <UI.RowWithProps
              type="text"
              title={mockTitles[index]}
              body={init}
              key={Math.random()}
            />
          ))}
          {data.phone && (
            <UI.RowWithProps
              type={"phone"}
              body={data.phone}
              title={"Телефон"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export { UserCard };
