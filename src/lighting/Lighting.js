import LightBulb from "./LightBulb";
import React, {useState} from "react";
import LightPositionInputs from "./LightPositionInputs";
import {Html} from '@react-three/drei'

function Lighting() {

    const [lightPosition, setLightPosition] = useState([0, 0, 0]);


    return (
        <>
            <ambientLight intensity={0.5}/>
            <LightBulb position={lightPosition}/>

            <Html>
                <LightPositionInputs lightPosition={lightPosition} setLightPosition={setLightPosition}/>
            </Html>
        </>
    )

}

export default Lighting;
