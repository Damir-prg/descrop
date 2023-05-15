import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {TTile} from "../types";


const Tile: FC<TTile> = ({path, label}) => {
  return (
    <li className="tile custom__shadow-inner">
      <Link to={path} className="w-full h-full flex items-center justify-start p-24 text-4xl">{label}</Link>
    </li>
  );
};

export {Tile};