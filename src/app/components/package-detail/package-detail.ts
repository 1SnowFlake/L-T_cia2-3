import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { DestinationService } from '../../services/destination.service';
import { Package } from '../../models/package.model';
import { Destination } from '../../models/destination.model';
import { MatButtonModule } from '@angular/material/button';
import { Observable, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './package-detail.html',
  styleUrl: './package-detail.scss',
})
export class PackageDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private destinationService = inject(DestinationService);
  private router = inject(Router);

  package$!: Observable<Package>;
  destinationDetails$!: Observable<Destination>;

  ngOnInit() {
    this.package$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.destinationService.getPackageById(id);
      })
    );

    // Fetch the detailed destination image for the hero section
    this.destinationDetails$ = this.package$.pipe(
      switchMap(pkg => this.destinationService.getDestinations().pipe(
        map(destinations => destinations.find(d => d.id === pkg.destinationId)!)
      ))
    );
  }

  // Navigate to the booking form
  navigateToBooking(packageId: number) {
    this.router.navigate(['/booking', packageId]);
  }
}