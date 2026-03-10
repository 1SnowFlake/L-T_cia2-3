import { Injectable, signal } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
// Update your BookingService class
export class BookingService {
  private bookedTrips = signal<Trip[]>([]);
  bookings = this.bookedTrips.asReadonly();

  addTicket(trip: Trip) {
    this.bookedTrips.update(current => [...current, trip]);
  }

  // NEW: Function to remove a ticket by its index in the list
  removeTicket(index: number) {
    this.bookedTrips.update(current => {
      const newList = [...current];
      newList.splice(index, 1); // Remove the item at this position
      return newList;
    });
  }
// Inside your BookingService class
clearAllBookings() {
  this.bookedTrips.set([]); // Sets the signal back to an empty array
}

}