import React from "react";
import { UI } from "components";
import { ComponentTypes } from "../types";

const TaskByHeader = ({ label }: ComponentTypes.TTaskByHeader) => {
  return (
    <UI.Custom.Label isBlockLabel={true} textPosition={"center"}>
      {label}
    </UI.Custom.Label>
  );
};

export { TaskByHeader };
