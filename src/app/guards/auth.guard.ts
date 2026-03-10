import { inject, Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private router = inject(Router);

  // Simple mock authentication check
  canActivate(): boolean | UrlTree {
    const isLoggedIn = true; // In a real app, inject AuthService and check state
    
    if (!isLoggedIn) {
      return this.router.parseUrl('/');
    }
    
    return true;
  }
}
