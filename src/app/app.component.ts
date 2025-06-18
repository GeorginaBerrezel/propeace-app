import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AnnonceListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
