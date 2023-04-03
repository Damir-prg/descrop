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
            className="w-full h-full flex flex-row items-center justify-around"
        >
            <div
                className="
                flex flex-col items-start gap-3
                w-fit h-fit
                bg-[#323232]
                rounded-lg
                py-4 px-4"
            >
                {ChartConsts.data.map((el, i) =>
                    <UI.RowWithProps
                        type="text" title={String(i+1)} body={el.letter} cssProps={userPageStyles}/>)
                }
            </div>
            <UserChart width={300} height={300} />
            <UserCard textStyles={userPageStyles} data={userData}/>
        </div>
    );
};

export {User};