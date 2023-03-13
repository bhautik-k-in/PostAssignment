import { Airline } from "./classes/airline";

const airlineSystem = new Airline();
const airports = airlineSystem.getAirports();

console.log(`Can reach to itself :::: ${airlineSystem.canReachItself(airports[1])}`);
console.log(`Can reach to the neighbors of given airport ::: ${airlineSystem.canReachNeighbors(airports[5])}`);
console.log(`Can reach to the neighbors neighbor ::: ${airlineSystem.canReachNeighborNeighbors(airports[1])}`);

// B to F
console.log(`B to F total Hops are ${airlineSystem.calculateHopCount(airports[1], airports[5])}`);

// H to D
console.log(`H to D total Hopes are ${airlineSystem.calculateHopCount(airports[4], airports[3])}`);

// C to A
console.log(`Shortest path between C and A ::: ${airlineSystem.findShortestPath(airports[2], airports[0])}`);

// C to B
const cheapest = airlineSystem.findCheapestPath(airports[2], airports[1])
console.log(`Shortest path between C to B ::: ${cheapest.path} and the cost is ::: ${cheapest.cost}`);
