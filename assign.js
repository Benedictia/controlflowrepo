const PI = 3.1415;
const radius = 5; 
const area = PI * radius * radius;
const minSpacePerPlant = 0.8; 
const maxPlantCount = (area / minSpacePerPlant); 

const initialPlants = 20; 

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


//Part 2
weeks= 10;
let startPlant=100;
plantGrowthAfterTenWeeks = startPlant* Math.pow(2,10);

newArea= plantGrowthAfterTenWeeks* 0.8;
nRadius= (newArea/PI);
console.log("newArea  % PI)")
for (let week=10; week<= weeks; week ++){
        startPlant = Math.pow(2,10);
        console.log("week")
    }
   
