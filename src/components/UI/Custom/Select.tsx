import React from 'react';
import {UITypes} from "../../../types";


const Select = (
    {
        title,
        options,
        optionSliceCount,
        onChange,
        placeholder}: UITypes.TCustomSelect) => {

    const checkOptionLength = (option: string): string => {
        if (optionSliceCount && option.length >= optionSliceCount) {
            return `${option.slice(0, optionSliceCount-3)}...`
        }
        return option;
    }

    return (
        <div className="flex flex-col items-start">
            <label className="text-[#ffe7d0] mb-1">{placeholder}:</label>
            <select
                title={title}
                onChange={onChange}
                placeholder={placeholder}
                className="p-2 outline-0 rounded-lg cursor-pointer"

            >
                {options.map((option, index) =>
                    <option title={option} value={index}
                    >{optionSliceCount ? checkOptionLength(option) : option}
                    </option>
                )}
            </select>    
        </div>
        
    );
};

export {Select};