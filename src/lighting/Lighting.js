import LightBulb from "./LightBulb";
import React, {useState} from "react";

function Lighting({lightPosition}) {

    return (
        <>
            <ambientLight intensity={0.5}/>
            <LightBulb position={lightPosition}/>
        </>
    )

}

export default Lighting;
