import React from 'react';
import {UITypes} from "types";


const TaskItem = ({title, isBold}: UITypes.TTaskItem) => {
    return (
        <span className="py-1 px-2 text-mainText">
            {isBold ? <b>{title}</b> : title}
        </span>
    );
};

export {TaskItem};