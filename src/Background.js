import {useThree} from "@react-three/fiber";
import * as THREE from "three";
import {useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Background() {
    const {gl} = useThree();

    const backgroundImage = useLoader(TextureLoader, '/background.jpeg')
    const formatted = new THREE.WebGLCubeRenderTarget(backgroundImage.image.height).fromEquirectangularTexture(gl, backgroundImage)
    return (
        <primitive attach="background" object={formatted.texture}/>
    )
}

export default Background;
