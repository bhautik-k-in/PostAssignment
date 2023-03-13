import { Airline } from "../classes/airline";

describe("Airline", () => {
  const airlineSystem = new Airline();
  const airports = airlineSystem.getAirports();

  test("Can reach to itself", () => {
    expect(airlineSystem.canReachItself(airports[1])).toBe(false);
  });

  test("Can reach to neighbors", () => {
    expect(airlineSystem.canReachNeighbors(airports[3])).toBe(true);
  });

  test("Can reach to neighbors neighbor", () => {
    expect(airlineSystem.canReachNeighborNeighbors(airports[1])).toBe(true);
  });

  test("from airport B to F hop counts should be 2", () => {
    expect(airlineSystem.calculateHopCount(airports[1], airports[5])).toBe(2);
  });

  test("from airport H to D hop counts should be 3", () => {
    expect(airlineSystem.calculateHopCount(airports[6], airports[3])).toBe(3);
  });

  test("from airport C to A shortest path should be c -> e -> b -> a", () => {
    expect(airlineSystem.findShortestPath(airports[2], airports[0])).toEqual(`c -> e -> b -> a`);
  });

  test("from airport C to B Cheapest path should be c -> d -> e -> b and cost should be 3 ", () => {
    expect(airlineSystem.findCheapestPath(airports[2], airports[1])).toEqual({
      path: `c -> d -> e -> b`,
      cost: 3,
    });
  });
});
