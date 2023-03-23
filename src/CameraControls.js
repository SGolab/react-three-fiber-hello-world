import {useThree} from "@react-three/fiber";
import {OrbitControls, FlyControls, Html, CameraShake} from '@react-three/drei'
import React, {useRef, useState} from "react";

function CameraControls() {
    const {camera, gl: {domElement}} = useThree();

    const cameraShakeArgs = {
        maxPitch: 0.05,
        maxRoll: 0.05,
        maxYaw: 0.05,
        pitchFrequency: 0.1,
        rollFrequency: 0.1,
        yawFrequency: 0.1,
    }

    return (
        <>

            <CameraShake {...cameraShakeArgs}/>

            <OrbitControls
                makeDefault
                enableZoom={false}
            />
        </>
    )
}

export default CameraControls;
