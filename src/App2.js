import myImage from './images/myImage.webp'

export function App2() {
    return (
        <>
            <img src={myImage} className='w-72 text-center'/>
            <br></br>
            <h1 className="text-amber-600 text-center">I dunno what to say</h1>
        </>
    );
}