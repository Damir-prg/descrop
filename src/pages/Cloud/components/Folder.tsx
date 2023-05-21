import React, { useState } from "react";
import { TFolder } from "../types";
import { ArrowIcon, FolderIcon } from "assets";

const Folder = ({ children, folderLabel }: TFolder) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col p-2 gap-2 items-center justify-start w-full h-auto custom__shadow-inner rounded-xl">
      <div
        className="w-full border-b-2 border-black p-2 flex flex-row items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-fit h-fit flex flex-row items-center justify-center gap-5">
          <ArrowIcon isActive={isOpen} /> <FolderIcon />{" "}
          {folderLabel ? folderLabel : "Folder"}
        </div>
      </div>
      {children ? (
        <>
          <div
            className={`w-full flex flex-col items-start justify-center px-5 gap-4 ${
              isOpen ? "max-h-fit" : "max-h-0 hidden"
            }`}
          >
            {Array.isArray(children) && children.map((el) => el)}
            {!Array.isArray(children) && <>{children}</>}
          </div>
        </>
      ) : null}
    </div>
  );
};

export { Folder };
