import React, {FC} from 'react';
import {UITypes} from "../../types";


const ModalWrapper: FC<UITypes.TModalWrapper> = ({isOpen, setIsOpen, children}) => {
    return (
        isOpen
        ?
            <>
                <div className="
                absolute top-0 left-0 z-50
                w-full h-full
                bg-neutral-800
                opacity-80
                flex items-center justify-center
                cursor-pointer
                "
                     onClick={() => setIsOpen(false)}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-fit h-fit bg-[#323232] rounded-lg p-6 z-50">
                    {children}
                </div>
            </>

            : <></>
    );
};

export {ModalWrapper};