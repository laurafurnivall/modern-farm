/*
Defined the function createPotato, no parameters, within
it define a variable and set it equal to a new object and 
set it's properties to those delineated in the instructions:
 type, height, output. Return the new object.
*/

export const createPotato = () => {
    let potatoObject = {
        type: "Potato",
        height: 32,
        output: 2
    }
     return potatoObject
} 


// Testing output of the object
// let potato = createPotato()
// console.log(potato)