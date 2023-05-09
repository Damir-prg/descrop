import React from 'react';
import {TaskItem} from "./UI";

const MyTasks = () => {
    return (
        <div
            className="
            w-full h-fit
            p-2
            bg-secondBg
            rounded-lg
            flex flex-col items-center justify-start
            "
        >
        <div className="grid grid-cols-my-task-user w-[100%] border-b-[1px] border-mainText">
            <TaskItem title={"Заголовок"} isBold={true}/>
            <TaskItem title={"Описание"} isBold={true}/>
            <TaskItem title={"Сроки"} isBold={true}/>
            <TaskItem title={"Сложность"} isBold={true}/>
        </div>
            {new Array(10).fill("").map(() => (
                <div key={Math.random()} className="grid grid-cols-my-task-user w-[100%] border-b-[1px] border-mainText">
                    <TaskItem title={"Word"}/>
                    <TaskItem title={"Написать отчет"}/>
                    <TaskItem title={"3 дня"}/>
                    <TaskItem title={"Средняя"}/>
                </div>
            ))}
        </div>
    );
};

export {MyTasks};