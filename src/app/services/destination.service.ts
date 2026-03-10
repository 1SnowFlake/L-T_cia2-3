import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../models/destination.model';
import { Package } from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations`);
  }

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.apiUrl}/packages`);
  }

  getPackageById(id: number): Observable<Package> {
    return this.http.get<Package>(`${this.apiUrl}/packages/${id}`);
  }
}
