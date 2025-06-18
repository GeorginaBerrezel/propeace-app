import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceService, Annonce } from '../../services/annonce.service';
import { AnnonceCardComponent } from '../annonce-card/annonce-card.component';

@Component({
  selector: 'app-annonce-list',
  standalone: true,
  imports: [CommonModule, AnnonceCardComponent],
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.scss']
})
export class AnnonceListComponent implements OnInit {
  annonces: Annonce[] = [];

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {
    this.annonceService.getAnnonces().subscribe((data: Annonce[]) => {
      console.log('Annonces reçues:', data);
      this.annonces = data;
    });
  }
}
