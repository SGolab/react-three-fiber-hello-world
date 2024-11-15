function LoadingScreen() {

    const style = {
        color: 'white',
        fontSize: '60px',
        backgroundColor: 'black',

        width: '100vw',
        height: '100vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }


    return (
        <div style={style}>
            LOADING...
        </div>
    )
}

export default LoadingScreen;
