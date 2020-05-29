console.log ("main.js");

// Array or Object Lightning #1 
// I chose object because there are many types of cars with many properties // that can be defined
const car = {
    year: 2015,
    make: "Ford",
    model: "Mustang",
    color: "Red"
};



console.log (`The car that is most likely to get pulled over is a ${car.color} ${car.year} ${car.make} ${car.model}, its just so flashy!`);


// Array or Object Lightning #2 
// I chose array because it was names of animals in a shelter that had no type of animal assoicated with it, making it less useful to assign a key:value pair (only had the value)... 
//EDIT: added keys to the names to try another approach of handling the data to suit the type of request (console log)

const shelterArray = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

console.log (`My shelter has animals named ${shelterArray}`)

const shelterObject = {
    1: "Kippers",
    2: "Jack",
    3: "Gypsy",
    4: "Angus",
    5: "Seymour Bouts",
    6: "Sharkey"
};

for (const animalNames in shelterObject)
console.log (`The names of the animals in the shelter are ${shelterObject[animalNames]}`);


// Array or Object Lightning #3 
// Define an object (this is an array made up of objects)
//I created objects to represent each member of a family and then put all those objects{} into an Array[] called familyMembers

const dad = {
    age: 50,
    hairColor: "none",
    mustache: "handle bar",
    tattos: true,
};

const mom = {
    age: "?",
    hairColor: "brown",
    mustache: "no",
    tattos: true,
};

const brother = {
    age: 5,
    hairColor: "blond",
    mustache: "no",
    tattos: false,
};

const sister = {
    age: 15,
    hairColor: "pink",
    mustache: "yes",
    tattos: true,
};

const me = {
    age: 20,
    hairColor: "blue",
    mustache: "yes",
    tattos: false,
};

const familyMembers = {dad, mom, brother, sister, me};

console.log(`My dad has a ${familyMembers.dad.mustache} mustache.`);


//Dot Notation Lightning #1
//Given the object wardrobe i pulled out all key:value pairs from the object using "dot notation" object.key in a ${} container using backticks `` around the entire output that is inside of the console.log().
//I also added a new key:value pair to the object and then console logged the entire object.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log (`I have a wardrob that is ${wardrobe.height} inches tall, ${wardrobe.width} inches wide, & ${wardrobe.depth} inches deep. It was manufactured by ${wardrobe.manufacturer}, and it contains all my clothes which are ${wardrobe.contents}`);

wardrobe.material = "Cedar"

console.log (wardrobe);

//Square Bracket Notation
//lightning #1 calls for dot notation 
//lightning #2 calls for Square Bracket Notation
//Square bracket notation is most often used when the key name is stored in a variable

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

//lightning #1 calls to use dot notation for output 
console.log(`The Empire State Building demensions are ${empireStateBuilding.height} feet high, ${empireStateBuilding.eastWestLength} ft east to west,  ${empireStateBuilding.northSouthLength} ft North to South, making it a crazy ${empireStateBuilding.squareFeet} square foot building that is ${empireStateBuilding.stories} stories high.`)

//lightning #2 calls to use Square Bracket Notation for output
// to utilise this notation you must have a variable that is equal to a key property of an object 
var empireAddress = "address";
var empireBuilt = "constructionDate";
var empireCost = "cost";
var empireOwner = "owner";
var empireArchitect = "architect";

console.log(`The Empire State Building is located at ${empireStateBuilding[empireAddress]}, it was built by ${empireStateBuilding[empireArchitect]} on ${empireStateBuilding[empireBuilt]} for the high cost of $${empireStateBuilding[empireCost]}, and is now currently owned by ${empireStateBuilding[empireOwner]}.`)


//Arrays as Values in an object Lightning #1
// ways to access values in an array that are inside other objects
// console.log part time instructors names and then full time instructors names
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

//instead of creating a variable to loop i referenced the array instead the 2 layers of objects
console.log(nashvilleSoftwareSchool.instructors.partTime + nashvilleSoftwareSchool.instructors.fullTime);

//created 2 variables to iterate through a loop to extract the values in each of the arrays.
const nssPT = nashvilleSoftwareSchool.instructors.partTime;
const nssFT = nashvilleSoftwareSchool.instructors.fullTime;

for (let i = 0; i < nssPT.length; i++) {
    console.log(nssPT[i])
};

for (let i = 0; i < nssFT.length; i++) {
    console.log(nssFT[i])
};

//console log specific values inside of the array
console.log(nashvilleSoftwareSchool.instructors.fullTime[4] + " and " + nashvilleSoftwareSchool.instructors.partTime[0] )
