export interface Booking {
  id?: number;
  userId: number;
  packageId: number;
  bookingDate: Date | string;
  passengers: number;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  totalPrice: number;
}
