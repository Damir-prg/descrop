import React from 'react';
import {UITypes} from "../../../types";


const ButtonAction = ({children, type, onClick, title}: UITypes.TCustomButtonAction) => {
    return (
        <button
            onClick={onClick}
            type={type}
            title={title}
            className="text-white bg-tnGreen shadow-inner py-2 px-8 rounded-3xl hover:bg-tnGreenLight tracking-wider"
        >
            {children}
        </button>
    );
};

export {ButtonAction};