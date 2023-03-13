import { Airport } from "../interfaces/airport";

export class AirlineSystem {
  // check if an airport can reach itself
  canReachItself(airport: Airport): boolean {
    return airport.neighbors.some((n) => n.airport === airport);
  }

  // check if an airport can reach its neighbors
  canReachNeighbors(airport: Airport): boolean {
    return airport.neighbors.length > 0;
  }

  // check if an airport can reach its neighbors' neighbors
  canReachNeighborNeighbors(airport: Airport): boolean {
    return airport.neighbors.some((n) => n.airport.neighbors.length > 0);
  }

  // calculate hop count between two airports
  calculateHopCount(from: Airport, to: Airport): number {
    const visited: Airport[] = [];
    const queue: { airport: Airport; hopCount: number }[] = [{ airport: from, hopCount: 0 }];

    while (queue.length > 0) {
      const { airport, hopCount } = queue.shift()!;
      if (airport === to) return hopCount;

      // SECOND LOGIC APPROACH and it is same for other functions too
      // visited.push(airport);
      // for (const neighbor of airport.neighbors) {
      //   if (!visited.includes(neighbor.airport)) {
      //     queue.push({ airport: neighbor.airport, hopCount: hopCount + 1 });
      //   }
      // }

      if (!visited.includes(airport)) {
        visited.push(airport);
        airport.neighbors.forEach((neighbor) => queue.push({ airport: neighbor.airport, hopCount: hopCount + 1 }));
      }
    }

    return -1; // if destination is not reachable
  }

  // find the shortest path between two airports
  findShortestPath(from: Airport, to: Airport): string {
    const visited: Airport[] = [];
    const queue: { airport: Airport; path: string[] }[] = [{ airport: from, path: [from.name] }];

    while (queue.length > 0) {
      const { airport, path } = queue.shift()!;
      if (airport === to) return path.join(" -> "); 

      if (!visited.includes(airport)) {
        visited.push(airport);
        airport.neighbors.forEach((neighbor) =>
          queue.push({
            airport: neighbor.airport,
            path: [...path, neighbor.airport.name],
          })
        );
      }
    }

    return `Destination is not reachable`; // if destination is not reachable
  }

  // find the cheapest path between two airports
  findCheapestPath(from: Airport, to: Airport): { path: string; cost: number } {
    const visited: Airport[] = [];
    const queue: { airport: Airport; path: string[]; cost: number }[] = [{ airport: from, path: [from.name], cost: 0 }];

    while (queue.length > 0) {
      const { airport, path, cost } = queue.shift()!;
      if (airport === to) return { path: path.join(" -> "), cost };

      if (!visited.includes(airport)) {
        visited.push(airport);
        airport.neighbors.forEach((neighbor) =>
          queue.push({
            airport: neighbor.airport,
            path: [...path, neighbor.airport.name],
            cost: cost + neighbor.weight,
          })
        );
        queue.sort((a, b) => a.cost - b.cost); // sort queue by cost to get the next airport with the lowest cost
      }
    }

    return { path: `Destination is not reachable`, cost: -1 }; // if destination is not reachable
  }
}
