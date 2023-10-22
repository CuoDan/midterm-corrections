import { Tile } from "./8-Tile";

export function App() {
    const content_list = getContent();
    const tile1Content = content_list[0];
    const tile2Content = content_list[1];

    return (
        <div className="featured-tile">
            <Tile content={tile1Content} />
            <Tile content={tile2Content} />
        </div>
    );
}