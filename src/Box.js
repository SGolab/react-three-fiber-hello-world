import React, {useRef, useState} from 'react'

function Box({position, rotationX, rotationY}) {

    const mesh = useRef();

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
        <mesh
            position={position}

            ref={mesh}

            rotation-x={rotationY}
            rotation-y={rotationX}

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