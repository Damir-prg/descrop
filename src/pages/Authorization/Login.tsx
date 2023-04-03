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
            bg-[#323232] p-3 rounded-lg w-8/12 flex-col
            gap-5 drop-shadow-2xl"
        >
            <h1 className="text-[#fc6e20] font-[200] tracking-widest text-3xl">Авторизация</h1>
            <UI.CustomRowInput type="text" placeholder="Введите логин" />
            <UI.CustomRowInput type="password" placeholder="Введите пароль"/>
            <span className="w-full text-left text-[#ffe7d0]">Нет аккаунта?{" "}
                <Link
                    className="text-[#fc6e20] underline hover:text-amber-600"
                    to="/registration"
                >Зарегистрируйтесь!</Link>
            </span>
            <UI.CustomButtonAction
                type="button"
                title="Отправить данные на проверку и войти"
                onClick={() => AuthStore.changeStatus()}
            >Войти</UI.CustomButtonAction>
        </form>
    </CenterWrapper>
    );
};

export {Login};