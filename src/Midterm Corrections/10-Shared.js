export function sum(numbers) {
    if (numbers && numbers.length > 0){
        // forEach() iterates each element in the array

        let result = 0; // this is the right way in my opinion
        
        // Professor, I think you made a mistake here:
        // const result = 0
        // this would give an error "TypeError: Assignment to constant variable." so you can't modify a constant variable
        numbers.forEach(x => {
            result += x; // this is where the TypeError showed if you used 'const result = 0'
        });
        return result;
    }
    return 0;
}