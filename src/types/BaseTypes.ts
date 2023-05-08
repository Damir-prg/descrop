import React, {ReactNode} from "react";

export type TOnClick<T> = {
    onClick?: (event:  React.MouseEvent<T, MouseEvent>) => void;
}

export type TOnChange<T> = {
     //T - HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    onChange?: (e: React.ChangeEvent<T>) => void;
}

export type TAutoFocus = {
    autoFocus?: boolean;
}

export type TTitle = {
    title?: string;
}

export type TChildren = {
    children: ReactNode;
}

export type TGovernance = {
    title: string;
    key: number;
}

type TDepartment = {
    name: string,
    id: number
}

export type TDepartments = {
    governanceKey: number;
    departments: Array<TDepartment>;
}