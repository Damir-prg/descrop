import React from "react";
import { Link } from "react-router-dom";
import { UITypes } from "../../../types";

const LinkButton = ({ path, title }: UITypes.TCustomLink) => {
  return (
    <Link
      to={path}
      className="hover:bg-tnGreenLight hover:text-white py-1 px-3 rounded-xl flex items-center custom__shadow-inner"
    >
      {title}
    </Link>
  );
};

export { LinkButton };
