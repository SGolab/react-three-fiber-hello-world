import Box from "./Box";
import {Canvas} from "@react-three/fiber";
import React, {useRef, useState} from "react";

function App() {

    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    return (
        <Canvas onWheel={(e) => {
            setRotationX(prev => prev + (e.deltaX / 1000))
            setRotationY(prev => prev + (e.deltaY / 1000))
        }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1, 0, 0]} rotationX={rotationX} rotationY={rotationY}/>
            <Box position={[1, 0, 0]} rotationX={rotationX} rotationY={rotationY}/>
        </Canvas>
    )
}

export default App;