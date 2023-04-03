import React from 'react';
import {Link} from "react-router-dom";
import {UITypes} from "../../types";


const CustomLink = ({path, title}: UITypes.TCustomLink) => {
    return (
        <Link
            to={path}
            className=""
        >
            {title}
        </Link>
    );
};

export {CustomLink};