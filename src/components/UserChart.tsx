import React from "react";
import ReactEcharts from "echarts-for-react";
import {ChartConsts} from "../consts";


const option = {
    radar: {
        indicator: ChartConsts.data,
    },
    series: [
        {
            name: 'user characters',
            type: 'radar',
            data: [
                {
                    value: ChartConsts.values,
                    name: 'Характеристика'
                },
            ]
        }
    ],
    textStyle: {
        color: "#fc6e20",
        fontWeight: 600,
    }
};

export const UserChart = ({size}: {size: number}) => {
    return (
        <div className="bg-[#323232] w-fit h-fit rounded-lg w-[80%] flex items-center justify-center">
            <ReactEcharts
                option={option}
                style={{height: `${size}px`, width: `100%`}}/>
        </div>
    )
}