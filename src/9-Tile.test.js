import { cleanup, render } from "@testing-library/react";
import { Tile } from "./8-Tile";

//Answers:

//Option 1
it("renders without error", () => {
    //Arange
    const content = [{ title: "test"}];

    //Act
    render(<Tile content={content} />);
});

//Option 3
it("should display image when image value is provided", () => {
    //Arange
    const content = [{ title: "test", image: "test-image.jpeg"}];

    //Act
    const { queryByRole } = render(<Tile content={content} />);

    //Assert
    const imageElement = queryByRole("img");
    expect(imageElement).toBeTruthy();
});

//Option 5 (I think option 5 is wrong...)
it("should NOT display image when image value is missing", () => {
    //Arange
    const content = [{ title: "test", image: ""}];

    //Act
    const { queryByRole } = render(<Tile content={content} />);

    //Assert
    //I think this is wrong because even if {image: ""}, there would still be a <img /> in Tile.js (the only thing that changes is that <img /> would have no source) 
    const imageElement = queryByRole("img"); // so when you queryByRole("img"), it would still be true, but there just won't be any source so the image wouldn't display
    expect(imageElement).toBeFalsy(); //Show error "expect(received).toBeFalsy() /n Received: <img />"
});