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

//Option 5
it("should NOT display image when image value is missing", () => {
    //Arange
    const content = [{ title: "test", image: ""}];

    //Act
    const { queryByRole } = render(<Tile content={content} />);

    //Assert
    const imageElement = queryByRole("img");
    expect(imageElement).toBeFalsy();
});