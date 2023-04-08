import React, {FC, useState} from 'react';
import {UI} from "../index";
import {StoreTypes, ComponentsTypes} from "../../types";
import {UserStore} from "../../stores";


const NewUserInfoForm: FC<ComponentsTypes.TNewUserInfoFrom> = (
    {
        prevData,
        closeModal
    }
) => {
    const [formData, setFormData] = useState<StoreTypes.IUser>(prevData);

    const setNewUserData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.phone.length !== 11) {
            alert("Номер телефона длиною только 11 символов");
        } else {
            console.log(formData)
            UserStore.setNewUserinfo(formData);
            if (closeModal){
                closeModal(false);
            }
        }
    }

    return (
        <form
            className="w-fit h-fit flex flex-col gap-2 items-center justify-center w-[350px]"
            onSubmit={(e) => setNewUserData(e)}
        >
            <h2 className="text-[#fc6e20] font-light mb-3">Изменение личных данных</h2>
            <UI.Custom.RowInput type="text" placeholder="ФИО"
                         onChange={(e) => setFormData({...prevData, initials: e.target.value})}/>
            <UI.Custom.RowInput type="text" placeholder="Управление"
                         onChange={(e) => setFormData({...prevData, governance: e.target.value})}/>
            <UI.Custom.RowInput type="text" placeholder="Отдел"
                         onChange={(e) => setFormData({...prevData, department: e.target.value})}/>
            <UI.Custom.RowInput type="text" placeholder="Должность"
                         onChange={(e) => setFormData({...prevData, jobTitle: e.target.value})}/>
            <UI.Custom.RowInput type="tel" placeholder="Телефон"
                         onChange={(e) => setFormData({...prevData, phone: e.target.value})}/>
            <UI.Custom.ButtonAction type="submit">Изменить</UI.Custom.ButtonAction>
        </form>
    );
};

export {NewUserInfoForm};