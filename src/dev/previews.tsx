import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {AppRoutes} from "../routers/AppRoutes";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/AppRoutes">
                <AppRoutes/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;