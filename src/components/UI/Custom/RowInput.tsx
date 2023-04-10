import React from 'react';
import {UITypes} from "../../../types";


const RowInput = ({type, onChange, placeholder, autoFocus, name, required}: UITypes.TCustomRowInput) => {
    return (
        <input
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            required={required}
            className="outline-0 rounded-lg py-1 px-4 text-[#fc6e20] w-full"
            autoFocus={autoFocus || false}
        />
    );
};

export {RowInput};