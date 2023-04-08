import React from 'react';
import {Link} from "react-router-dom";
import {UITypes} from "../../../types";


const LinkButton = ({path, title}: UITypes.TCustomLink) => {
    return (
        <Link
            to={path}
            className="hover:bg-gray-700 py-1 px-3 rounded-lg"
        >
            {title}
        </Link>
    );
};

export {LinkButton};