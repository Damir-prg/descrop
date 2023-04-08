import React from 'react';
import {UI, MyTasks} from "../../components";


const Tasks = () => {
    return (
        <div
            className="w-full h-full flex flex-col items-center justify-start py-6 gap-5"
        >
            <UI.Custom.Label isBlockLabel={true}>Мои задачи</UI.Custom.Label>
            <MyTasks/>
        </div>
    );
};

export {Tasks};