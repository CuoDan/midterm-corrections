[
    {
        image: "https://image.placeholder.com/coding.jpeg",
        provider: "Microsoft",
        title: "Microsoft Power BI Data Analyst",
        courseType: "Professional Certificate"
    }, {
        image: "https://image.placeholder.com/promote.jpeg",
        provider: "DeepLearning.AI",
        title: "Generative AI with Large Language Models",
        courseType: "Course"
    }
]

// Answer: Option 5
export function Tile(props) {
    const { content } = props;
    const { image, provider, title, courseType } = content;
    return (
        <div className="tile">
            <img src={image} />
            <div>{provider}</div>
            <div>{title}</div>
            <div>{courseType}</div>
        </div>
    );
}