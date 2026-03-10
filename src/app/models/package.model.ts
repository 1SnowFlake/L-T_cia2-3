export interface Package {
  id: number;
  destinationId: number;
  name: string;
  price: number;
  summary: string;
  schedule?: {
    day: number;
    title: string;
    activities: string[];
  }[];
}
