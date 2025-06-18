import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceListComponent } from '../../components/annonce-list/annonce-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, AnnonceListComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
