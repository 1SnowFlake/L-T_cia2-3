import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/users';

  getCurrentUser(): Observable<User[]> {
     // Mocking authentication by just returning the first user
    return this.http.get<User[]>(`${this.apiUrl}?id=1`);
  }
}
