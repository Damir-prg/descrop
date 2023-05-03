import React, { useState} from "react";


type TCustomSelect = {
  options: string[];
  width?: string;
  placeholder?: string;
} & TOnChange;
type TOnChange = { onChange?: (index: number) => void };

const Select2: React.FC<TCustomSelect> = ({
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
          onClick={(e) => setIsActive(!isActive)}
        >
          <span title={selectedValue} className={"pr-[20px]"}>{selectedValue}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`absolute top-[6px] right-[8px] w-6 h-6 transition-[0.3s] ${
              isActive ? "-rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <ul
          className={`w-full overflow-auto transition-[0.3s] ${
            isActive ? "max-h-[200px] py-2" : "max-h-0"
          } flex flex-col items-center justify-start gap-2`}
        >
          {options.map((option, index) => (
            <li
              className="w-[95%] p-2 shadow px-1 cursor-pointer hover:bg-orange hover:text-white rounded"
              onClick={(e) => {
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

export { Select2 };
