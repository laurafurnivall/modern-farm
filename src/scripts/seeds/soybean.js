/*
Defined the function createSoybean, no parameters, within
it define a variable and set it equal to a new object and 
set it's properties to those delineated in the instructions:
 type, height, output. Return the new object.
*/

export const createSoybean = () => {
    let soybeanObject = {
        type: "Soybean",
        height: 20,
        output: 4
    }
     return soybeanObject
} 


// Testing output of the object
// let soybean = createSoybean()
// console.log(soybean)