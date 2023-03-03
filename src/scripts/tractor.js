/*
1. Import all seeds and usePlants,addPlants
2. Define and export a function named plantSeeds. 
3. Set parameter of function as plantingPlan
4. Within function, use a double for...loop to firest loop through
the yearly plan (3 arrays), and then loop through each item within each array.
5. Use 6 if statments to check if within those loops the items represent the
6 potential plants and if they do, then addPlants(createWhicheverseed()). This
will add a seed object into the empty fields array. 
7. Outside of the for...loops. return usePlants, which will return the new 
fields array full of plant objects.
*/

import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant, usePlants } from "./field.js"


export const plantSeeds = (plantingPlan) => {
    for (let yearPlan of plantingPlan) {
        for (let seedOfPlant of yearPlan) {
            if (seedOfPlant === "Asparagus") {
                addPlant(createAsparagus())
            } 
            if (seedOfPlant === "Corn") {
                addPlant(createCorn())
            }
            if (seedOfPlant === "Wheat") {
                addPlant(createWheat())
            }
            if (seedOfPlant === "Soybean") {
                addPlant(createSoybean())
            }
            if (seedOfPlant === "Potato") {
                addPlant(createPotato())
            }
            if (seedOfPlant === "Sunflower") {
                addPlant(createSunflower())
            }
        }
    } return usePlants()
}