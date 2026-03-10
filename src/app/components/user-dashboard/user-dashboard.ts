import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './user-dashboard.html',
})
export class UserDashboard implements OnInit {
  bookingService = inject(BookingService);
  myTickets$!: Observable<Booking[]>;
  
  today: Date = new Date(); 

  ngOnInit() {
    this.myTickets$ = this.bookingService.myBookings$;
  }

  deleteBooking(id: number | undefined) {
    if (id && confirm('Are you sure you want to cancel this booking?')) {
      this.bookingService.removeBooking(id).subscribe();
    }
  }

  getTotalCost(tickets: Booking[]): number {
    return tickets.reduce((sum, ticket) => sum + ticket.totalPrice, 0);
  }

  onCheckout() {
    alert('Success! A payment link and itinerary have been sent to your registered email.');
    this.bookingService.clearAllBookings();
  }
}