import React, {FC} from 'react';
import {UI} from "./index";
import {ComponentsTypes} from "../types";


const UserCard:FC<ComponentsTypes.TUserCard> = ({ textStyles, data}) => {
    return (
        <div
            className="
            w-fit h-fit
            bg-[#323232]
            rounded-lg
            py-4 px-4
            flex flex-row gap-5
            "
        >
            <div className="flex flex-col gap-4 text-[#ffe7d0] items-center">
                <div
                    className={`
                    w-40 h-40 bg-[#fc6e20] rounded-[50%] flex items-center justify-center
                    `}
                >IMAGE</div>
                <UI.CustomLink path="/self" title="Редактировать" />
            </div>
            <div
                className=" flex flex-col gap-3"
            >
                <UI.RowWithProps
                    type="text" title="ФИО" body={data.initials} cssProps={textStyles}/>
                <UI.RowWithProps
                    type="text" title="Телефон" body={data.phone} cssProps={textStyles}/>
                <UI.RowWithProps
                    type="text" title="Управление" body={data.governance} cssProps={textStyles}/>
                <UI.RowWithProps
                    type="text" title="Отдел" body={data.department} cssProps={textStyles}/>
                <UI.RowWithProps
                    type="text" title="Должность" body={data.jobTitle} cssProps={textStyles}/>
                <UI.RowWithProps
                    type="text" title="Команда" body={data.commandName} cssProps={textStyles}/>
                <UI.RowWithProps
                    type="text" title="Эффективность" body={String(data.efficiency) + "%"} cssProps={textStyles}/>
                <UI.RowWithProps
                    type="text" title="Рейтинг" body={String(data.rating) + "/17"} cssProps={textStyles}/>
                <UI.RowWithProps
                    type="text" title="Активных проектов" body={String(data.activeProjects)} cssProps={textStyles}/>
            </div>
        </div>
    );
};

export {UserCard};