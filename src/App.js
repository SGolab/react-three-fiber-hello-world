import Scene from "./Scene";
import Overlay from "./Overlay";
import {Suspense, useState} from "react";
import LoadingScreen from "./LoadingScreen";

function App() {

    const [lightPosition, setLightPosition] = useState([0, 0, 0]);

    return (
        <>
            <Suspense fallback={<LoadingScreen/>}>
                <Overlay lightPosition={lightPosition} setLightPosition={setLightPosition}/>

                <Scene lightPosition={lightPosition}/>
                {/*/!*<FadeIn/>*!/ https://codesandbox.io/s/2ycs3?file=/src/layout/styles.js:55-131*/}
            </Suspense>

        </>
    )
}

export default App;
