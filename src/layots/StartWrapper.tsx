import React from 'react';
import {WrapperTypes} from "../types"

const StartWrapper = ({cssProps, children}: WrapperTypes.IWrapper) => {
    return (
        <div className={`flex flex-col items-center justify-start w-full h-full ${cssProps ? cssProps : ""}`}>
            {children}
        </div>
    );
};

export {StartWrapper};