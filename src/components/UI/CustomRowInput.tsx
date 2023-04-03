import React from 'react';
import {UITypes} from "../../types";


const CustomRowInput = ({type, onChange, placeholder, autoFocus}: UITypes.TCustomRowInput) => {
    return (
        <input
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className="outline-0 rounded-lg py-1 px-4 text-[#fc6e20] w-full"
            autoFocus={autoFocus || false}
        />
    );
};

export {CustomRowInput};