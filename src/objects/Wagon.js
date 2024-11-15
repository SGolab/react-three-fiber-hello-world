import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useState} from "react";
import HoverLabel from "../HoverLabel";

function Wagon({position, rotation}) {

    const gltf = useLoader(GLTFLoader, '/stylized_wagon/wagon.gltf')

    const [hovered, setHover] = useState(false)

    return (
        <>
            <primitive object={gltf.scene}
                       position={position}
                       rotation-x={rotation.y}
                       rotation-y={rotation.x}

                       scale={hovered ? 1.2 : 1}

                       onPointerOver={() => setHover(true)}
                       onPointerOut={() => setHover(false)}
            />

            {hovered && <HoverLabel text={'WAGON'} position={position}/>}

        </>
    )
}

export default Wagon
