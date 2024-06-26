import React from "react";
import { Link } from "react-router-dom";

const Department = (props: {
  departmentName: string;
  departmentId: number;
}) => {
  return (
    <Link
      to={`/main/department/${props.departmentId}`}
      className="w-full hover:bg-tnGreenLight p-2.5 rounded-xl border-gray-500 border-b-2"
    >
      {props.departmentName}
    </Link>
  );
};

export { Department };
