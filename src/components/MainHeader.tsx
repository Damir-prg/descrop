import React from 'react';
import {HeaderConst} from "../consts";
import {UI} from "./index";


const MainHeader = () => {
    return (
        <header
            className="
            sticky top-0 z-40
            text-mainText bg-secondBg
            flex flex-row items-center justify-between
            w-full
            px-4 py-2
            drop-shadow-lg
            "
        >
            <span
                className="text-xl font-mono tracking-widest uppercase"
            >descrop</span>
            <div
                className="flex flex-row flex-wrap gap-3"
            >
                {HeaderConst.headerLinks.map(el =>
                    <UI.Custom.LinkButton path={el.path} title={el.title} key={Math.random()}/>)
                }
            </div>
        </header>
    );
};

export {MainHeader};