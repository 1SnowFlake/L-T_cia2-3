import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar'; // 1. Import it

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // 2. Add it here
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'travel-explorer';
}