import React from 'react';
import {Commands, CreateModalBlock} from "./Components";
import {UserStore} from "stores";

import {StartWrapper} from "layots";
import {useParams} from "react-router-dom";
import {useStore} from "effector-react";

const CommandsPage = () => {
  const {id} = useParams()
  const {userData} = useStore(UserStore.$userInfo)

  if (!userData) return <></>

  return (
    <StartWrapper cssProps={"p-10 gap-5"}>
      <Commands id={id ? id : ""}/>
      <CreateModalBlock/>
    </StartWrapper>
  );
};

export {CommandsPage};