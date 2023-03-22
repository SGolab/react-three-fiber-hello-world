import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import React from "react";

function LightBulb({position}) {

    const gltf = useLoader(GLTFLoader, '/light_bulb/scene.gltf')

    return (
        <>
            <pointLight position={position}/>
            <primitive object={gltf.scene} position={position} scale={0.01}/>
        </>
    )
}

export default LightBulb
