import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/bookings';

  private myBookingsSubject = new BehaviorSubject<Booking[]>([]);
  myBookings$ = this.myBookingsSubject.asObservable();

  constructor() {
    this.refreshBookings(1); // Assuming user 1 for now
  }

  refreshBookings(userId: number) {
    this.http.get<Booking[]>(`${this.apiUrl}?userId=${userId}`).subscribe(bookings => {
      this.myBookingsSubject.next(bookings);
    });
  }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking).pipe(
      tap(() => this.refreshBookings(booking.userId))
    );
  }

  removeBooking(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        // Just refresh for user 1 for now
        this.refreshBookings(1);
      })
    );
  }
  
  clearAllBookings() {
     // Optional: If we wanted to loop through and delete all the mock JSON items. For now we will keep it simple.
     this.myBookingsSubject.next([]);
  }
}
