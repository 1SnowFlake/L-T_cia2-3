import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // <--- IMPORTANT: Ensure this is here!
  imports: [MatToolbarModule, MatButtonModule, RouterLink],
  templateUrl: './navbar.html', // <--- NOTE: Check this name (see next step)
  styleUrl: './navbar.scss'
})
export class NavbarComponent {}