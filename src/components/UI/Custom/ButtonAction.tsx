import React from 'react';
import {UITypes} from "../../../types";


const ButtonAction = ({children, type, onClick, title}: UITypes.TCustomButtonAction) => {
    return (
        <button
            onClick={onClick}
            type={type}
            title={title}
            className="text-[#ffe7d0] bg-[#fe6e20] py-2 px-8 rounded-lg hover:bg-amber-600 tracking-wider"
        >
            {children}
        </button>
    );
};

export {ButtonAction};