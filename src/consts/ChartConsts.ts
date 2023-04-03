import {ConstsTypes} from "../types";


export const orange = '#ff9933';
export const pumpkin = '#fc6e20';
export const wire = '#ffe7d0';
export const background = '#1b1b1b';

export const degrees = 360;

// frequency - значение характеристики, где 1 - максимум, 5 - минимум
export const data: ConstsTypes.TChartData[] = [
    {letter: "Скорость", frequency: 1},
    {letter: "Качество", frequency: 3},
    {letter: "Коммуникабельность", frequency: 4},
    {letter: "Знания технологий", frequency: 3},
    {letter: "Понимание проектов", frequency: 2},
]

export const defaultMargin = { top: 0, left: 20, right: 20, bottom: 0 };