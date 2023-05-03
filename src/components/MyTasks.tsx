import React from 'react';
import {UI} from "./index";

const MyTasks = () => {
    return (
        <div
            className="
            w-[80%] h-fit
            p-2
            bg-secondBg
            rounded-lg
            flex flex-col items-center justify-start
            "
        >
        <div className="grid grid-cols-my-task-user w-[100%] border-b-[1px] border-mainText">
            <UI.TaskItem title={"Заголовок"} isBold={true}/>
            <UI.TaskItem title={"Описание"} isBold={true}/>
            <UI.TaskItem title={"Сроки"} isBold={true}/>
            <UI.TaskItem title={"Сложность"} isBold={true}/>
        </div>
            {new Array(10).fill("").map(() => (
                <div key={Math.random()} className="grid grid-cols-my-task-user w-[100%] border-b-[1px] border-mainText">
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