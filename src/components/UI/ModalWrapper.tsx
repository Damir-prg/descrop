import React, {FC, useState} from 'react';
import {UITypes} from "../../types";


const ModalWrapper: FC<UITypes.TModalWrapper> = ({isOpen, setIsOpen, children}) => {
    return (
        isOpen
        ?
            <>
                <div className="
                absolute top-0 left-0
                w-screen h-screen
                bg-neutral-800
                opacity-80
                flex items-center justify-center
                cursor-pointer
                "
                     onClick={() => setIsOpen(false)}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-fit h-fit bg-[#323232] rounded-lg p-6">
                    {children}
                </div>
            </>

            : <></>
    );
};

export {ModalWrapper};