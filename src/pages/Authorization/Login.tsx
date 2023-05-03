import React from 'react';
import {UI} from "../../components";

import {CenterWrapper} from "../../layots";
import {Link} from "react-router-dom";

import {AuthStore} from "../../stores";


const Login = () => {
    return (
    <CenterWrapper>
        <form
            className="flex items-center justify-center
            bg-secondBg p-3 rounded-lg w-[600px] flex-col
            gap-5 drop-shadow-2xl"
        >
            <h1 className="text-blockBg font-[200] tracking-widest text-3xl">Авторизация</h1>
            <UI.Custom.RowInput type="text" placeholder="Введите логин" />
            <UI.Custom.RowInput type="password" placeholder="Введите пароль"/>
            <span className="w-full text-left text-beige">Нет аккаунта?{" "}
                <Link
                    className="text-blockBg underline hover:text-amber-600"
                    to="/registration"
                >Зарегистрируйтесь!</Link>
            </span>
            <UI.Custom.ButtonAction
                type="button"
                title="Отправить данные на проверку и войти"
                onClick={() => AuthStore.changeStatus()}
            >Войти</UI.Custom.ButtonAction>
        </form>
    </CenterWrapper>
    );
};

export {Login};