import React, {FC} from 'react';
import {UITypes} from "../../../types";


const Label:FC<UITypes.TCustomLabel> = (
    {
     children,
     isBlockLabel,
     backgroundColor,
     underline,
     textColor,
    }) => {

    return (
        <div
            className={`
            flex flex-col items-start justify-start gap-2
            w-[80%] py-2 px-2
            bg-[#${backgroundColor ? backgroundColor : "323232"}] 
            text-[#${textColor ? textColor : "ffe7d0"}]
            ${isBlockLabel ? "rounded-lg" : ""}
            `}
        >
            <span className="font-bold">{children}</span>
            {underline &&
                <span
                    className={`
                    bg-[#${textColor ? textColor : "fc6e20"}] 
                    rounded-[2px] 
                    w-full h-[2px]
                    `}
                />
            }
        </div>
    );
};

export {Label};