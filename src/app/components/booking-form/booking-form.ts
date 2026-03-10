import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSnackBarModule
  ],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss'
})
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  packageId!: number;

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private bookingService = inject(BookingService);
  private snackBar = inject(MatSnackBar);

  ngOnInit() {
    this.packageId = Number(this.route.snapshot.paramMap.get('id'));

    this.bookingForm = this.fb.group({
      passengers: [1, [Validators.required, Validators.min(1), Validators.max(10)]],
      bookingDate: ['', Validators.required],
      specialRequests: ['']
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const formValue = this.bookingForm.value;
      const newBooking = {
        userId: 1, // Mock user ID 
        packageId: this.packageId,
        bookingDate: formValue.bookingDate,
        passengers: formValue.passengers,
        specialRequests: formValue.specialRequests,
        status: 'pending' as const,
        totalPrice: formValue.passengers * 1000 // Mock price calculation
      };

      this.bookingService.addBooking(newBooking).subscribe({
        next: () => {
          this.snackBar.open('Booking successful!', 'View Dashboard', {
            duration: 3000
          }).onAction().subscribe(() => {
            this.router.navigate(['/dashboard']);
          });
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.snackBar.open('Booking failed. Please try again.', 'Close', { duration: 3000 });
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/package', this.packageId]);
  }
}
