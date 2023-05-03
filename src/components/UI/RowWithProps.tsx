import {UITypes} from "../../types";


const RowWithProps = ({type, title, body, cssProps}: UITypes.TRowWithProps) => {

    const checkType = (): string => {
        switch (type) {
            case "text":
                return " " + body;
            case "phone":
                if (body.length === 11) {
                    return ` ${body[0]} (${body.slice(1, 4)}) ${body.slice(4, 7)}-${body.slice(7,9)}-${body.slice(9,11)}`
                } else {
                    return "Номер телефона нужно ввести в одну строку"
                }
            default:
                return "Тип не обработан"
        }
    };

    return (
            <span className={`text-mainText ${cssProps}`}>{title}: {checkType()}</span>
    );
};

export {RowWithProps};