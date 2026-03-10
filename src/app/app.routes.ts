import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // 1. Ensure this is imported
import { NavbarComponent } from './components/navbar/navbar';
import { Routes } from '@angular/router';
import { DestinationListComponent } from './components/destination-list/destination-list';
import { PackageDetail } from './components/package-detail/package-detail';
import { UserDashboard } from './components/user-dashboard/user-dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // 2. Ensure it's listed here
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}


import { BookingFormComponent } from './components/booking-form/booking-form';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/destinations', pathMatch: 'full' },
  { path: 'destinations', component: DestinationListComponent },
  { path: 'package/:id', component: PackageDetail },
  { path: 'booking/:id', component: BookingFormComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: UserDashboard, canActivate: [AuthGuard] }
];