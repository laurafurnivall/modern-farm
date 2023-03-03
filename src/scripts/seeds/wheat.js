/*
Defined the function createWheat, no parameters, within
it define a variable and set it equal to a new object and 
set it's properties to those delineated in the instructions:
 type, height, output. Return the new object.
*/

export const createWheat = () => {
    let wheatObject = {
        type: "Wheat",
        height: 230,
        output: 6
    }
     return wheatObject
} 


// Testing output of the object
// let wheat = createWheat()
// console.log(wheat)