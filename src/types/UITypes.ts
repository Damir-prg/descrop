import {
  TAutoFocus,
  TChildren,
  TTitle,
  TOnChange,
  TOnClick,
} from "./BaseTypes";

export type TCustomRowInput = {
  type: "email" | "password" | "tel" | "text" | "url";
  placeholder?: string;
  name?: string;
  required?: boolean;
} & TAutoFocus &
  TOnChange<HTMLInputElement>;

export type TCustomButtonAction = {
  type: "button" | "submit";
} & TChildren &
  TTitle &
  TOnClick<HTMLButtonElement>;

export type TCustomSelect = {
  options: string[];
  optionSliceCount?: number;
  placeholder?: string;
} & TTitle &
  TOnChange<HTMLSelectElement>;

export type TCustomLink = {
  path: string;
} & TTitle;

export type TRowWithProps = {
  type: "text" | "phone" | "email" | "date";
  body: string;
  title: string;
  cssProps?: string;
};

export type TModalWrapper = {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
} & TChildren;

export type TCustomLabel = {
  isBlockLabel: boolean;
  textColor?: string;
  backgroundColor?: string;
  underline?: boolean;
} & TChildren;

export type TTaskItem = {
  isBold?: boolean;
} & TTitle;
