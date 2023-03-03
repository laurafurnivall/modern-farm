/*
1. Define and export harvestPlants function.
2. Set parameter as planting (referencing plantSeeds from
    tractor.js).
3. Within function => define a variable and set it = an
empty array.
4. Iterate through the parameter (which will be plantSeeds)
with for...of loop.  
5. In this iteration use an if...else statement to delineate
corn form the rest of the plants. 
    5a. For corn use a for loop, which will produce half 
    of the corn output (plant.output/2).
    5b. For other plants in the else segment, use a for loop
    to produce the same number of plant objects as the output.
6. Push the new objects in the empty array. 
7. Return the new array. 
*/


export const harvestPlants = (planting) => {
    const harvestedSeeds = [];
    for (const plant of planting) {
      if (plant.type === 'Corn') {
        for (let i = 0; i < plant.output / 2; i++) {
          harvestedSeeds.push(plant);
        }
      } else {
        for (let i = 0; i < plant.output; i++) {
          harvestedSeeds.push(plant);
        }
      }
    }
    return harvestedSeeds;
  };

