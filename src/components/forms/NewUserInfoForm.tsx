import React, {FC, useEffect, useState} from 'react';
import {UI} from "../index";
import {StoreTypes, ComponentsTypes} from "../../types";
import {UserStore} from "../../stores";


const NewUserInfoForm: FC<ComponentsTypes.TNewUserInfoFrom> = (
    {
        prevData,
        closeModal
    }
) => {
    const [data, setData] = useState<StoreTypes.IUser>(prevData);

    const setNewUserData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        setData({...prevData,
            initials: formData.get("initials") as string,
            governance: formData.get("governance") as string,
            department: formData.get("department") as string,
            jobTitle: formData.get("jobTitle") as string,
            phone: formData.get("phone") as string
        })

        if (closeModal) {
            closeModal(false)
        }
    }

    useEffect(() => {
        UserStore.setNewUserinfo(data);
        }, [data])

    return (
        <form
            className="w-fit h-fit flex flex-col gap-2 items-center justify-center w-[650px]"
            onSubmit={(e) => setNewUserData(e)}
        >
            <h2 className="text-[#fc6e20] font-light mb-3">Изменение личных данных</h2>
            <UI.Custom.RowInput type="text" placeholder="ФИО" name="initials" required={true}/>
            <UI.Custom.RowInput type="text" placeholder="Управление" name="governance" required={true}/>
            <UI.Custom.RowInput type="text" placeholder="Отдел" name="department" required={true}/>
            <UI.Custom.RowInput type="text" placeholder="Должность" name="jobTitle" required={true}/>
            <UI.Custom.RowInput type="tel" placeholder="Телефон" name="phone" required={true}/>
            <UI.Custom.ButtonAction type="submit">Изменить</UI.Custom.ButtonAction>
        </form>
    );
};

export {NewUserInfoForm};