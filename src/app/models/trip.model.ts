export interface Trip {
  id: number;
  name: string;
  country: string;
  price: number;
  imageUrl: string;
  description: string;
  summary: string;
  schedule?: {
    day: number;
    title: string;
    activities: string[];
  }[];
}