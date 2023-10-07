import moonFestivalImage from './images/moon-festival.webp';
import {App2} from "./App2";

export function App() {
    return (
        <>
            <img src={moonFestivalImage} className='w-72' />
            <h1 className="text-amber-600">Hello World Again!</h1>
            <App2></App2>
        </>
    );
}
