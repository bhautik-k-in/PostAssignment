import { Airport } from "../interfaces/airport";
import { AirlineSystem } from "./system";

export class Airline {
  private readonly airports: Airport[];
  private readonly AirlineSystem: AirlineSystem;

  constructor() {
    const a: Airport = { name: "a", neighbors: [] };
    const b: Airport = { name: "b", neighbors: [] };
    const c: Airport = { name: "c", neighbors: [] };
    const d: Airport = { name: "d", neighbors: [] };
    const e: Airport = { name: "e", neighbors: [] };
    const f: Airport = { name: "f", neighbors: [] };
    const h: Airport = { name: "h", neighbors: [] };

    a.neighbors.push({ airport: f, weight: 1 });
    b.neighbors.push({ airport: a, weight: 1 });
    h.neighbors.push({ airport: b, weight: 1 });
    b.neighbors.push({ airport: c, weight: 1 });
    c.neighbors.push({ airport: d, weight: 1 });
    c.neighbors.push({ airport: e, weight: 5 });
    c.neighbors.push({ airport: e, weight: 4 }); // NOTE: two routes available to e
    d.neighbors.push({ airport: e, weight: 1 });
    e.neighbors.push({ airport: b, weight: 1 });

    this.AirlineSystem = new AirlineSystem();
    this.airports = [a, b, c, d, e, f, h];
  }

  getAirports() {
    return this.airports;
  }

  canReachItself(airport: Airport): boolean {
    return this.AirlineSystem.canReachItself(airport);
  }

  canReachNeighbors(airport: Airport): boolean {
    return this.AirlineSystem.canReachNeighbors(airport);
  }

  canReachNeighborNeighbors(airport: Airport): boolean {
    return this.AirlineSystem.canReachNeighborNeighbors(airport);
  }

  calculateHopCount(from: Airport, to: Airport): number {
    return this.AirlineSystem.calculateHopCount(from, to);
  }

  findShortestPath(from: Airport, to: Airport): string {
    return this.AirlineSystem.findShortestPath(from, to);
  }

  findCheapestPath(from: Airport, to: Airport): { path: string; cost: number } {
    return this.AirlineSystem.findCheapestPath(from, to);
  }
}
