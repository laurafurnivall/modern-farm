/*
Define variable and set to empty array. It's purpose is
to store the plants growing in the fields.
*/
let fields = []


/*
1. Define and export a function named addPlant. 
2. Set a parameter as 'seedObjects'. 
3. Within the function, use an if..else statement to check if the seedObjects
is an array and within that loop through the seed object, and .push each 
singular object within the array into the empry fields array.
4. If the seedObjects is not an array, .push each singular object into the 
empty fields array.
*/
export const addPlant = (seedObjects) => {
    if (Array.isArray(seedObjects)) {
        for (let seedObject of seedObjects) {
            fields.push(seedObject)
        } 
    } else {
    fields.push(seedObjects)
    }
}


/*
Define and export a function named usePlants that retuns
a copy of the fields array.
*/
export const usePlants = () => {
    return fields
}


