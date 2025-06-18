import { Component } from '@angular/core';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnnonceListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'immobilier-app';
}
