const PI = 3.1415;
const radius = 5; // in meters
const area = PI * radius * radius; // area in square meters
const minSpacePerPlant = 0.8; // area required per plant in square meters
const maxPlantCount = (area / minSpacePerPlant); // maximum number of plants

const initialPlants = 20; // starting number of plants

// Calculate plant counts for each week
const plantCountWeek1=40
const plantCountWeek2= 80
const plantCountWeek3 = 160

if (plantCountWeek1 > (0.8 * maxPlantCount)) {
    console.log("Week 1 Action: Prune");
} else if (plantCountWeek1 > (0.5 * maxPlantCount)) {
    console.log("Week 1 Action: Monitor");
} else {
    console.log("Week 1 Action: Plant");
}


if (plantCountWeek2 > (0.8 * maxPlantCount)) {
    console.log("Week 2 Action: Prune");
} else if (plantCountWeek2 > (0.5 * maxPlantCount)) {
    console.log("Week 2 Action: Monitor");
} else {
    console.log("Week 2 Action: Plant");
}

if (plantCountWeek3 > (0.8 * maxPlantCount)) {
    console.log("Week 3 Action: Prune");
} else if (plantCountWeek3 > (0.5 * maxPlantCount)) {
    console.log("Week 3 Action: Monitor");
} else {
    console.log("Week 3 Action: Plant");
}


