import React from 'react';
import {UI} from "./index";

const MyTasks = () => {
    return (
        <div
            className="
            w-[80%] h-fit
            p-2
            bg-[#323232]
            rounded-lg
            flex flex-col items-center justify-start
            "
        >
        <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-[#ffe7d0]">
            <UI.TaskItem title={"Заголовок"}/>
            <UI.TaskItem title={"Описание"}/>
            <UI.TaskItem title={"Сроки"}/>
            <UI.TaskItem title={"Сложность"}/>
        </div>
            {new Array(10).fill("").map(el => (
                <div className="grid grid-cols-4 w-[100%] border-b-[1px] border-[#ffe7d0]">
                    <UI.TaskItem title={"Word"}/>
                    <UI.TaskItem title={"Написать отчет"}/>
                    <UI.TaskItem title={"3 дня"}/>
                    <UI.TaskItem title={"Средняя"}/>
                </div>
            ))}
        </div>
    );
};

export {MyTasks};