import React from 'react';
import {UITypes} from "../../types";


const TaskItem = ({title, isBold}: UITypes.TTaskItem) => {
    return (
        <span className="py-1 px-2 text-[#ffe7d0]">
            {isBold ? <b>{title}</b> : title}
        </span>
    );
};

export {TaskItem};