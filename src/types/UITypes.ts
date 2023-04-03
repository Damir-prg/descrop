import {TAutoFocus, TChildren, TTitle, TOnChange, TOnClick} from "./BaseTypes";

export type TCustomRowInput = {
    type: 'email' | 'password' | 'tel' | 'text' | 'url';
    placeholder?: string;
} & TAutoFocus & TOnChange<HTMLInputElement>;

export type TCustomButtonAction = {
    type: "button" | "submit";
} & TChildren & TTitle & TOnClick<HTMLButtonElement>;

export type TCustomSelect = {
    options: string[];
    optionSliceCount?: number;
    placeholder?: string;
} & TTitle & TOnChange<HTMLSelectElement>;

export type TCustomLink = {
    path: string;
} & TTitle;