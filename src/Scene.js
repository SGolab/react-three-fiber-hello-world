import {Canvas} from "@react-three/fiber";
import React, {useEffect, useState} from "react";
import Wagon from "./objects/Wagon";
import CameraControls from "./CameraControls";
import Background from "./Background";
import Lighting from "./lighting/Lighting";
import {Vector2} from "three";
import Microphone from "./objects/Microphone";

function Scene({lightPosition}) {

    useEffect(() => console.log('scene rendered'))

    return (
        <>
            <Canvas>

                <CameraControls/>
                <Background/>
                <Lighting lightPosition={lightPosition}/>

                <RotatingObjectGroup/>

            </Canvas>
        </>
    )
}

export default Scene;

function RotatingObjectGroup() {

    const [rotation, setRotation] = useState({x: 0, y: 0})

    const handleOnWheel = function (e) {
        setRotation(prev => {
            return {
                x: prev.x + (e.deltaX / 1000),
                y: prev.y + (e.deltaY / 1000)
            }
        })
    }

    return (
        <>
            <mesh onWheel={e => handleOnWheel(e)}>
                <shapeGeometry>
                    <shape points={[
                        new Vector2(-1, -1),
                        new Vector2(-1, 1),
                        new Vector2(1, 1),
                        new Vector2(1, -1)]}
                    />
                </shapeGeometry>
                <meshBasicMaterial color={0xCC0000}/>
            </mesh>

            {/*<Box position={[2, 0, 0]} rotation={rotation}/>*/}
            <Microphone position={[2, 0, 0]} rotation={rotation}/>
            <Wagon position={[-2, 0, 0]} rotation={rotation}/>
        </>
    )
}
