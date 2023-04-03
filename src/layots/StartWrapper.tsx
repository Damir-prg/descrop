import React from 'react';
import {WrapperTypes} from "../types"

const StartWrapper = ({cssProps, children}: WrapperTypes.IWrapper) => {
    return (
        <div className={`flex items-start justify-center w-full min-h-full ${cssProps ? cssProps : ""}`}>
            {children}
        </div>
    );
};

export {StartWrapper};