import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import React, {useState} from "react";
import HoverLabel from "./HoverLabel";

function Microphone({position, rotation}) {

    const gltf = useLoader(GLTFLoader, 'microphone_gxl_066_bafhcteks/scene.gltf')

    const [hovered, setHover] = useState(false)

    return (
        <>
            <primitive object={gltf.scene}
                       position={position}
                       rotation-x={rotation.y}
                       rotation-y={rotation.x}

                       scale={hovered ? 1.1 : 1}

                       onPointerOver={() => setHover(true)}
                       onPointerOut={() => setHover(false)}
            />

            {hovered && <HoverLabel text={'MICROPHONE'} position={position}/>}
        </>
    )
}

export default Microphone
