import Box from "./Box";
import {Canvas} from "@react-three/fiber";
import React, {useState} from "react";
import Wagon from "./Wagon";
import LightBulb from "./LightBulb";
import LightPositionInputs from "./LightPositionInputs";

function App() {

    const [rotation, setRotation] = useState({x: 0, y: 0})
    // const [rotationX, setRotationX] = useState(0);
    // const [rotationY, setRotationY] = useState(0);

    const [lightPosition, setLightPosition] = useState([0, 0, 0]);

    return (
        <>
            <Canvas onWheel={(e) => {
                setRotation(prev => {
                    return {
                        x: prev.x + (e.deltaX / 1000),
                        y: prev.y + (e.deltaY / 1000)
                    }
                })
            }}>

                <ambientLight intensity={0.5}/>
                <LightBulb position={lightPosition}/>

                <Box position={[2, 0, 0]} rotation={rotation}/>
                <Wagon position={[-2, -1, 0]} rotation={rotation}/>

            </Canvas>

            <LightPositionInputs lightPosition={lightPosition} setLightPosition={setLightPosition}/>
        </>
    )
}

export default App;
