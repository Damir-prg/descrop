import {UserStore} from "../../stores";
import {useStore} from "effector-react";
import {UI, UserCard, UserChart} from "../../components"
import React from "react";


const User = () => {
    const userData = useStore(UserStore.$userInfo)
    const userPageStyles = `bg-[#fc6e20] rounded-lg p-2 text-[#323232]`;
    return (
        <div
            className="w-full h-full flex flex-col items-center justify-center py-6 gap-5"
        >
            <UI.Custom.Label isBlockLabel={true}>Профиль</UI.Custom.Label>
            <UserCard textStyles={userPageStyles} data={userData}/>
            <UI.Custom.Label isBlockLabel={true}>Диаграмма краткой характеристики</UI.Custom.Label>
            <UserChart size={400}/>
        </div>
    );
};

export {User};