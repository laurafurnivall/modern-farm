/*
1. Define and export a catalog function.
2. Within the function set harvestPlants... = to a new variable.
3. Define an htmlString and set it equal to an empty string.
4. Iterate through the new variable, and for each iteration add to the htmlString
each crop.type that is "harvested"
5. Return the htmlString
*/

import { harvestPlants } from "./harvester.js"
import { plantSeeds } from "./tractor.js"
import { createPlan } from "./plan.js"


export const Catalog = () => {
    let harvest = harvestPlants(plantSeeds(createPlan()))
    let htmlString = ''
    for (let oneCrop of harvest) {
        htmlString += `<section class="plant">${oneCrop.type}</section>`
    }
    return htmlString
}