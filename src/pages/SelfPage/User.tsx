import {UserStore} from "../../stores";
import {useStore} from "effector-react";
import {UI, UserCard, UserChart} from "../../components"
import React from "react";
import {ChartConsts} from "../../consts";


const User = () => {
    const userData = useStore(UserStore.$userInfo)
    const userPageStyles = `bg-[#fc6e20] rounded-lg p-2 text-[#323232]`;
    return (
        <div
            className="w-full h-full flex flex-row items-center justify-center gap-4"
        >
            <UserChart size={400}/>
            <UserCard textStyles={userPageStyles} data={userData}/>
        </div>
    );
};

export {User};