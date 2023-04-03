import {FC} from "react";
import {WrapperTypes}  from "../types"

const CenterWrapper: FC<WrapperTypes.IWrapper> = ({children, cssProps}) => {
    return (
        <div className={`flex items-center justify-center w-full min-h-full ${cssProps ? cssProps : ""}`}>
            {children}
        </div>
    );
};

export {CenterWrapper};