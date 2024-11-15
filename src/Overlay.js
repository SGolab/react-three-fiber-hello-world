import LightPositionInputs from "./lighting/LightPositionInputs";

function Overlay({lightPosition, setLightPosition}) {
    return (
        <div style={{zIndex: 100, position: 'absolute' ,fontSize: '44px', color: 'black'}}>
            <LightPositionInputs lightPosition={lightPosition} setLightPosition={setLightPosition}/>
        </div>
    )
}

export default Overlay;
