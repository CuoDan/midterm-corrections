// Answer: Option 5
export function Tile(props) {
    const { content } = props;
    const { image, provider, title, courseType } = content;

    let imageElement = <></>;
    if (image) {
        imageElement = <img src={image} />;
    }

    return (
        <div className="tile">
            {imageElement}
            <div>{provider}</div>
            <div>{title}</div>
            <div>{courseType}</div>
        </div>
    );
}

export function App() { 
    const image1 = {
        image: "https://cdn.britannica.com/06/150806-050-6AE99C98/Proboscis-monkey.jpg",
        provider: "Britannica",
        title: "Monkey Gasping",
        courseType: "Monkey 1"
    }

    const image2 = {
        image: "https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg",
        provider: "Wikimedia",
        title: "Monkey Selfie",
        courseType: "Monkey 2"
    }

    return (
        <div className="featured-tiles">
            <Tile content={image1}></Tile>
            <Tile content={image2}></Tile>
        </div>
    )
}