import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceService, Annonce } from '../../services/annonce.service';
import { AnnonceCardComponent } from '../annonce-card/annonce-card.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-annonce-list',
  standalone: true,
  imports: [CommonModule, FormsModule, AnnonceCardComponent],
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.scss']
})
  export class AnnonceListComponent implements OnInit {
    annonces: Annonce[] = [];

    villeFilter = '';
    prixMaxFilter: number | null = null;
    surfaceMinFilter: number | null = null;
    dateMinFilter: string = '';

    constructor(private annonceService: AnnonceService) {}

    ngOnInit(): void {
      this.annonceService.getAnnonces().subscribe((data: Annonce[]) => {
        this.annonces = data;
      });
    }

    filteredAnnonces(): Annonce[] {
      return this.annonces.filter(a => {
        const matchVille = this.villeFilter ? a.ville.toLowerCase().includes(this.villeFilter.toLowerCase()) : true;
        const matchPrix = this.prixMaxFilter !== null ? a.prix <= this.prixMaxFilter : true;
        const matchSurface = this.surfaceMinFilter !== null ? a.surface >= this.surfaceMinFilter : true;
        const matchDate = this.dateMinFilter ? new Date(a.datePublication) >= new Date(this.dateMinFilter) : true;

        return matchVille && matchPrix && matchSurface && matchDate;
      });
    }
  }
