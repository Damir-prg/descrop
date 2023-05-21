import React from "react";
import { useParams } from "react-router-dom";
import { StartWrapper } from "layots";
import { TaskByDepartment, TaskByCommand, TaskByUser } from "./components";
import "./styles/TaskBlock.css";

type taskByRoute = {
  name: "department" | "command" | "user";
};

const TaskBy = () => {
  const { name } = useParams() as taskByRoute;
  return (
    <StartWrapper cssProps={"p-10 gap-5"}>
      {name === "department" && <TaskByDepartment />}
      {name === "command" && <TaskByCommand />}
      {name === "user" && <TaskByUser />}
    </StartWrapper>
  );
};

export { TaskBy };
