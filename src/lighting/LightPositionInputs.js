import React from "react";

function LightPositionInputs({lightPosition, setLightPosition}) {

    const updateLightPosition = function (updatePosition) {

        const newPosition = [...lightPosition]

        for (let i = 0; i < updatePosition.length; i++) {
            if (updatePosition[i]) {
                newPosition[i] = updatePosition[i]
            }
        }

        setLightPosition(newPosition)
    }

    const inputConfig = {
        min: "-3",
        max: "3",
        step: "0.01"
    }

    return (
        <div style={{position: 'absolute', top: '0'}}>
            <label htmlFor="light-x">Light-x</label>
            <input type={"range"}
                   id={'light-x'}
                   defaultValue={lightPosition[0]}
                   {...inputConfig}
                   onChange={(e) => updateLightPosition([e.target.value, 0, 0])}/>
            <label htmlFor="light-y">Light-y</label>
            <input type={"range"}
                   id={'light-y'}
                   defaultValue={lightPosition[1]}
                   min="-3"
                   max="3"
                   step="0.01"
                   onChange={(e) => updateLightPosition([0, e.target.value, 0])}/>
            <label htmlFor="light-z">Light-z</label>
            <input type={"range"}
                   id={'light-z'}
                   defaultValue={lightPosition[2]}
                   min="-3"
                   max="3"
                   step="0.01"
                   onChange={(e) => updateLightPosition([0, 0, e.target.value])}/>
        </div>
    )
}

export default LightPositionInputs;
