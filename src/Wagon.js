import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Wagon({position, rotationX, rotationY}) {

    const gltf = useLoader(GLTFLoader, '/stylized_wagon/wagon.gltf')

    return <primitive object={gltf.scene} position={position} rotation-x={rotationY} rotation-y={rotationX}/>
}

export default Wagon
