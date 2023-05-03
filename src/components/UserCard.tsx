import React, {FC, useState} from 'react';
import {UI, forms} from "./index";
import {ComponentsTypes} from "../types";


const UserCard:FC<ComponentsTypes.TUserCard> = ({ textStyles, data}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    return (
        <div
            className="
            w-[80%] h-fit
            bg-secondBg
            rounded-lg
            py-4 px-4
            flex flex-col gap-5
            "
        >
            <div className="flex flex-col gap-4 text-mainText items-center">
                <div
                    className={`
                    w-40 h-40 bg-[#fc6e20] rounded-[50%] flex items-center justify-center
                    `}
                >IMAGE</div>
                <UI.Custom.ButtonAction type="button" title="Редактировать" onClick={() => setIsModalOpen(true)}>
                    Редактировать
                </UI.Custom.ButtonAction>
            </div>
            <div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
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
            <UI.ModalWrapper isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <forms.NewUserInfoForm prevData={data} closeModal={setIsModalOpen}/>
            </UI.ModalWrapper>
        </div>
    );
};

export {UserCard};