import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationService } from '../../services/destination.service';
import { Destination } from '../../models/destination.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../directives/highlight';
import { FilterPipe } from '../../pipes/filter-pipe';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    RouterLink,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    Highlight,
    FilterPipe
  ],
  templateUrl: './destination-list.html',
  styleUrl: './destination-list.scss'
})
export class DestinationListComponent implements OnInit {
  destinationService = inject(DestinationService);
  destinations$!: Observable<Destination[]>;
  searchText: string = '';

  ngOnInit() {
    this.destinations$ = this.destinationService.getDestinations();
  }
}