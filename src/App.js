import {Canvas} from "@react-three/fiber";
import React, {useState} from "react";
import Wagon from "./Wagon";
import CameraControls from "./CameraControls";
import Background from "./Background";
import Lighting from "./lighting/Lighting";
import {Vector2} from "three";
import Microphone from "./Microphone";

function App() {

    return (
        <>
            <Canvas>

                <CameraControls/>
                <Background/>
                <Lighting/>

                <RotatingObjectGroup/>

            </Canvas>
        </>
    )
}

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

export default App;
