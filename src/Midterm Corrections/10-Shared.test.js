// Correct answers:
import { sum } from "./10-Shared";

//Option 1
it("should return 0 when list is NULL", () => {
    //Arange
    const numbers = null;

    //Act 
    const result = sum(numbers);

    //Assert
    expect(result).toBe(0);
})

//Option 2
it("should return 0 when list is empty", () => {
    //Arange
    const numbers = [];

    //Act 
    const result = sum(numbers);

    //Assert
    expect(result).toBe(0);
})

//Option 3
it("should return correct value when list has number value", () => {
    //Arange
    const numbers = [10]

    //Act 
    const result = sum(numbers);

    //Assert
    expect(result).toBe(10);
})

//Option 4
it("should return correct value when list has number value", () => {
    //Arange
    const numbers = [-1, 0, 1, 2, 3];

    //Act 
    const result = sum(numbers);

    //Assert
    expect(result).toBe(5);
})