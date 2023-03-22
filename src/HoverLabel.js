import {Html} from "@react-three/drei";

function HoverLabel({text, position}) {
    return (
        <Html position={position}>
                <div className={'label'}>{text}</div>
        </Html>
    )
}

export default HoverLabel;
