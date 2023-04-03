import React, {useState} from 'react';
import {CenterWrapper} from "../../layots";
import {UI} from "../../components";
import {Link} from "react-router-dom";
import {AuthConst} from "../../consts";


const Registration = () => {
    const [departments, setDepartments] = useState<string[]>(AuthConst.departments[0].departments)
    const sortByGovernanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const governanceIndex = Number(e.target.value)
        setDepartments(AuthConst.departments[governanceIndex].departments)
    }

    return (
        <CenterWrapper>
            <form
                className="flex items-center justify-center
            bg-[#323232] p-3 rounded-lg w-8/12 flex-col
            gap-5 drop-shadow-2xl"
            >
                <h1
                    className="text-[#fc6e20] font-[200] tracking-widest text-3xl"
                >Регистрация</h1>
                <UI.CustomRowInput type="text" placeholder="Введите логин" />
                <UI.CustomRowInput type="text" placeholder="Введите пароль"/>
                <UI.CustomRowInput type="password" placeholder="Повторите пароль"/>
                <div className="flex flex-row justify-between w-full">
                    <UI.CustomSelect
                        options={AuthConst.governance.map(el => el.title)}
                        placeholder="Выбрать управление"
                        onChange={sortByGovernanceChange}

                    />
                    <UI.CustomSelect
                        options={departments}
                        placeholder="Выбрать отдел"

                    />
                </div>
                <span className="w-full text-left text-[#ffe7d0]">Уже есть аккаунт?{" "}
                    <Link
                        className="text-[#fc6e20] underline hover:text-amber-600"
                        to="/login"
                    >Войти</Link>
                </span>
                <UI.CustomButtonAction
                    type="button"
                    title="Отправить данные на проверку и войти"
                >Зарегистрироваться</UI.CustomButtonAction>
            </form>
        </CenterWrapper>
    );
};

export {Registration};