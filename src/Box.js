import React, {useRef, useState} from 'react'

function Box({position, rotation}) {

    const mesh = useRef();

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
        <mesh
            position={position}

            ref={mesh}

            rotation-x={rotation.y}
            rotation-y={rotation.x}

            scale={active ? 2 : 1}

            onClick={(event) => setActive(!active)}

            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
        </mesh>
    )
}

export default Box;
