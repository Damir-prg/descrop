import React, { FC } from "react";
import { UITypes } from "../../../types";

const Label: FC<UITypes.TCustomLabel> = ({
  children,
  isBlockLabel,
  backgroundColor,
  underline,
  textColor,
  textPosition,
}) => {
  const checkTextPos = (): string => {
    switch (textPosition) {
      case "left":
        return "items-start";
      case "center":
        return "items-center";
      case "right":
        return "items-end ";
      default:
        return "items-start";
    }
  };

  return (
    <div
      className={`
            flex flex-col ${checkTextPos()} gap-2
            w-full py-2 px-2
            bg-[#${backgroundColor ? backgroundColor : "secondBg"}] 
            text-[#${textColor ? textColor : "blockBg"}]
            ${isBlockLabel ? "rounded-lg" : ""}
            custom__shadow-inner
            `}
    >
      <span className="font-bold">{children}</span>
      {underline && (
        <span
          className={`
                    bg-[#${textColor ? textColor : "blockBg"}] 
                    rounded-[2px] 
                    w-full h-[2px]
                    `}
        />
      )}
    </div>
  );
};

export { Label };
