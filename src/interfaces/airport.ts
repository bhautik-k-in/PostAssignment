export interface Airport {
  name: string;
  neighbors: { airport: Airport; weight: number }[];
}
