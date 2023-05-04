import React from 'react';
import {HeaderConst, MainConsts} from "consts";
import {UI} from "./index";
import {AuthStore} from "stores";


const MainHeader = () => {
    return (
        <header
            className="
            sticky top-0 z-40
            text-mainText bg-mainBg
            flex flex-row items-center justify-between
            w-full
            px-4 py-2
            shadow-xl
            "
        >
            <span
                className="text-xl font-mono tracking-widest uppercase custom__shadow-inner p-2 rounded-xl"
            >{MainConsts.LOGO}</span>
            <div
                className="flex flex-row flex-wrap gap-3"
            >
                {HeaderConst.headerLinks.map(el =>
                    <UI.Custom.LinkButton path={el.path} title={el.title} key={Math.random()}/>)
                }
                <UI.Custom.ButtonAction type={"button"} onClick={(e) => AuthStore.changeStatus()}>Выйти</UI.Custom.ButtonAction>
            </div>
        </header>
    );
};

export {MainHeader};