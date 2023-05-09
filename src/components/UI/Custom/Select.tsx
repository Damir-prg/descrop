import React, { useState} from "react";
import {ArrowIcon} from "assets";


type TCustomSelect = {
  options: string[];
  width?: string;
  placeholder?: string;
} & TOnChange;
type TOnChange = { onChange?: (index: number) => void };

const Select: React.FC<TCustomSelect> = ({
  placeholder = "Выберите",
  width = "w-full",
  options,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(placeholder);
  const [isActive, setIsActive] = useState<boolean>(false);


  return (
    <div className={`${width} h-10 relative`} >
      <div
        className={`w-full transition-[0.3s] overflow-hidden
         ${isActive ? "" : "max-h-10"} rounded-lg border absolute bg-white`}
      >
        <div
          className={`relative cursor-pointer px-2 py-1.5 flex items-center justify-between ${
            isActive ? "bottom-1" : ""
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <span title={selectedValue} className={"pr-[20px]"}>{selectedValue}</span>
          <ArrowIcon isActive={isActive} cssProps={"absolute top-[6px] right-[8px]"}/>
        </div>
        <ul
          className={`w-full overflow-auto transition-[0.3s] ${
            isActive ? "max-h-[200px] py-2" : "max-h-0"
          } flex flex-col items-center justify-start gap-2`}
        >
          {options.map((option, index) => (
            <li
              key={option}
              className="w-[95%] p-2 shadow px-1 cursor-pointer hover:bg-gray-50 hover:text-mainText rounded"
              onClick={() => {
                setSelectedValue(option);
                if (onChange) {
                  onChange(index);
                }
                setIsActive(!isActive)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Select };
