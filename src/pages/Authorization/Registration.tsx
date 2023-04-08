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
            bg-gray p-3 rounded-lg w-8/12 flex-col
            gap-5 drop-shadow-2xl"
            >
                <h1
                    className="text-orange font-[200] tracking-widest text-3xl"
                >Регистрация</h1>
                <UI.Custom.RowInput type="text" placeholder="Введите логин" />
                <UI.Custom.RowInput type="text" placeholder="Введите пароль"/>
                <UI.Custom.RowInput type="password" placeholder="Повторите пароль"/>
                <div className="flex flex-row justify-between w-full">
                    <UI.Custom.Select
                        options={AuthConst.governance.map(el => el.title)}
                        placeholder="Выбрать управление"
                        onChange={sortByGovernanceChange}

                    />
                    <UI.Custom.Select
                        options={departments}
                        placeholder="Выбрать отдел"

                    />
                </div>
                <span className="w-full text-left text-beige">Уже есть аккаунт?{" "}
                    <Link
                        className="text-orange underline hover:text-amber-600"
                        to="/login"
                    >Войти</Link>
                </span>
                <UI.Custom.ButtonAction
                    type="button"
                    title="Отправить данные на проверку и войти"
                >Зарегистрироваться</UI.Custom.ButtonAction>
            </form>
        </CenterWrapper>
    );
};

export {Registration};