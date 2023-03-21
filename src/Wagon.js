import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

function Wagon({position, rotation}) {

    const gltf = useLoader(GLTFLoader, '/stylized_wagon/wagon.gltf')

    return (
        <primitive object={gltf.scene}
                   position={position}
                   rotation-x={rotation.y}
                   rotation-y={rotation.x}
        />
    )
}

export default Wagon
