console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)

/*
Test logic for seed modules.
*/
// import { createCorn } from "./seeds/corn.js"

// const cornSeed = createCorn()
// console.log(cornSeed)

/*
Test logic for field module. Define object, set
pretend properties. Import both addPlant and usePlants from
field.js. Define a variable(a) and set it equal to the addPlant
function with the object as it's parameter. Define a 
second variable(b) below this and set it equal to the usePlants
function and set it's parameter as the variable(a) mentioned
above. Console.log variable(b).
*/
// let seedyObject = {
//     type: "Eggplant",
//     height: 5,
//     output: 1
// }

// import { addPlant } from "./field.js"
// import { usePlants } from "./field.js"

// let eggplant = addPlant(seedyObject)
// let newObject = usePlants(eggplant)
// console.log(newObject)


//Test Logic for tractor.js module.
// console.log(plantSeeds(yearlyPlan))

// //Test Logic or tractor.js module.
// console.log(harvestPlants(plantSeeds(yearlyPlan)))

const parentHTMLElement = document.querySelector(".messages")
parentHTMLElement.innerHTML = Catalog(harvestPlants(plantSeeds(yearlyPlan)))