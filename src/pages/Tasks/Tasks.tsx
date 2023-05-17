import React from "react";
import { StartWrapper } from "layots";
import { Tile } from "./components";
import { tileLinks } from "./constants";
import "./styles/Tiles.css";

const Tasks = () => {
  return (
    <StartWrapper cssProps={"p-10 gap-5"}>
      <ul className="tile-wrapper">
        {tileLinks.map(({ path, label }) => (
          <Tile path={path} label={label} key={Math.random()} />
        ))}
      </ul>
    </StartWrapper>
  );
};

export { Tasks };
