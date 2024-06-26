import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/initial.css";
import "./styles/vars.css";
import  "./styles/custom.css"
import {AppRoutes} from "./routers/AppRoutes";

import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    </DevSupport>
);
