import {useState} from "react";
import {InitialHookStatus} from "@react-buddy/ide-toolbox";

export const useInitial: () => InitialHookStatus = () => {
    const [status, setStatus] = useState<InitialHookStatus>({
        loading: false,
        error: false,
    });
    /*
      Реализуйте функциональность ловушки здесь.
      Если вам нужно выполнить асинхронную операцию, установите загрузку в true, а когда она закончится,
            установите загрузку в false.
      Если вы поймали какие-то ошибки, установите статус ошибки в true.
      Начальный хук считается успешно завершенным, если он вернет {loading: false, error: false}.
    */
    return status;
};
