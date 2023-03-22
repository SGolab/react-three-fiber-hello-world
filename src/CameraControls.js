import {useThree} from "@react-three/fiber";
import {OrbitControls, FlyControls, Html} from '@react-three/drei'
import {useState} from "react";

// import { FlyControls } from 'three/addons/controls/FlyControls.js';


function CameraControls() {
    const {camera, gl: {domElement}} = useThree();
    const [isFly, setIsFly] = useState(false);

    return (
        <>
            {isFly &&
                <FlyControls
                    args={[camera, domElement]}
                    dragToLook={true}
                    rollSpeed={0.5}/>
            }

            {!isFly &&
                <OrbitControls
                args={[camera, domElement]}
                enableZoom={false}/>
            }}

            <Html position={[0, 2, 0]}>
                <button onClick={() => setIsFly(prev => !prev)}>
                    CAMERA
                </button>
            </Html>
        </>
    )
}

export default CameraControls;
