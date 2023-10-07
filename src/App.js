import moonFestivalImage from './images/moon-festival.webp';
import {App2} from "./App2";

export function App() {
    return (
        <>
            <br></br>
            <img src={moonFestivalImage} className='w-72 justify-center' />
            <br></br>
            <h1 className="text-amber-600 text-center">Hello World Again!</h1>
            <br></br>
            <App2></App2>
        </>
    );
}
