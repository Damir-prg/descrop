import React from "react";
import { PdfIcon, ImgIcon, WordIcon, OtherFileIcon } from "assets";
import { TFile } from "../types";

const File = ({ type, label }: TFile) => {
  const choiceIcon = () => {
    switch (type) {
      case "word":
        return <WordIcon />;
      case "img":
        return <ImgIcon />;
      case "other":
        return <OtherFileIcon />;
      case "pdf":
        return <PdfIcon />;
    }
  };
  return (
    <div className="w-full custom__shadow-inner rounded-xl p-2 flex flex-row items-center justify-between cursor-pointer hover:bg-amber-50 hover:underline">
      <div className="w-fit h-fit flex flex-row items-center justify-center gap-5">
        {choiceIcon()}
        {label}
      </div>
      <div></div>
    </div>
  );
};

export { File };
