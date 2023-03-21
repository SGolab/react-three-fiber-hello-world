import Box from "./Box";
import {Canvas} from "@react-three/fiber";
import React, {useState} from "react";
import Wagon from "./Wagon";
import LightBulb from "./LightBulb";
import LightPositionInputs from "./LightPositionInputs";

function App() {

    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    const [lightPosition, setLightPosition] = useState([0, 0, 0]);

    return (
        <>
            <Canvas onWheel={(e) => {
                setRotationX(prev => prev + (e.deltaX / 1000))
                setRotationY(prev => prev + (e.deltaY / 1000))
            }}>

                <ambientLight intensity={0.5}/>
                <LightBulb position={lightPosition}/>

                <Box position={[2, 0, 0]} rotationX={rotationX} rotationY={rotationY}/>
                <Wagon position={[-2, -1, 0]} rotationX={rotationX} rotationY={rotationY}/>

            </Canvas>

            <LightPositionInputs lightPosition={lightPosition} setLightPosition={setLightPosition}/>
        </>
    )
}

export default App;
