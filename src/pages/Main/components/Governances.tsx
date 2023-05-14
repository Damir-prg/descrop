import React, { useState } from "react";
import { ArrowIcon } from "assets";
import { Department } from "./Department";

import { BaseTypes } from "types";

const Governances = (props: {
  governance: BaseTypes.TGovernance;
  departments: BaseTypes.TDepartments;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full custom__shadow-inner rounded-xl p-2.5">
      <div
        className="flex flex-row flex-nowrap w-full items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.governance.title}
        <ArrowIcon isActive={isOpen} />
      </div>
      <div
        className={`flex flex-col transition-[1s] overflow-hidden h-auto  ${!isOpen ? "max-h-0" : "max-h-[fit-content]"}
          w-full
        `}
      >
        {props.departments.departments.map((el) => (
          <Department
            departmentName={el.name}
            departmentId={el.id}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export { Governances };
