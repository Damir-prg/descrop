import React from "react";
import ReactEcharts from "echarts-for-react";
import {ChartConsts} from "../../../consts";
import * as echarts from "echarts";


type EChartsOption = echarts.EChartsOption;


export const UserChart = ({size, options}: {size: number, options: Array<number>}) => {

    const option: EChartsOption = {
        radar: {
            indicator: ChartConsts.data,
        },
        series: [
            {
                name: 'user characters',
                type: 'radar',
                data: [
                    {
                        value: options,
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

    return (
        <div className="bg-secondBg w-[80%] h-fit rounded-lg flex items-center justify-center">
            <ReactEcharts
                option={option}
                style={{height: `${size}px`, width: `100%`}}/>
        </div>
    )
}