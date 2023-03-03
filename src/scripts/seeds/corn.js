/*
Defined the function createCorn, no parameters, within
it define a variable which will be equal to an array that
contains two objects. Properties of those were delineated
in the instructions: type, height, output. Return the new object.
*/

export const createCorn = () => {
    let corn = [
        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ] 
    return corn 
}


// Testing output of the object pre export
// let corn = createCorn()
// console.log(corn)