import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceService, Annonce } from '../../services/annonce.service';
import { AnnonceCardComponent } from '../annonce-card/annonce-card.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-annonce-list',
  standalone: true,
  imports: [CommonModule, FormsModule, AnnonceCardComponent, RouterModule],
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.scss']
})
export class AnnonceListComponent implements OnInit {
  annonces: Annonce[] = [];

  villeFilter = '';
  prixMaxFilter: number | null = null;
  surfaceMinFilter: number | null = null;
  dateMinFilter = '';

  sortBy: 'prix' | 'date' = 'prix';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private annonceService: AnnonceService, private router: Router) {}

  ngOnInit(): void {
    this.annonceService.getAnnonces().subscribe((data: Annonce[]) => {
      this.annonces = data;
    });
  }

  filteredAnnonces(): Annonce[] {
    const filtered = this.annonces.filter(a => {
      const matchVille = this.villeFilter ? a.ville.toLowerCase().includes(this.villeFilter.toLowerCase()) : true;
      const matchPrix = this.prixMaxFilter !== null ? a.prix <= this.prixMaxFilter : true;
      const matchSurface = this.surfaceMinFilter !== null ? a.surface >= this.surfaceMinFilter : true;
      const matchDate = this.dateMinFilter ? new Date(a.datePublication) >= new Date(this.dateMinFilter) : true;
      return matchVille && matchPrix && matchSurface && matchDate;
    });

    filtered.sort((a, b) => {
      const valA = this.sortBy === 'prix' ? a.prix : new Date(a.datePublication).getTime();
      const valB = this.sortBy === 'prix' ? b.prix : new Date(b.datePublication).getTime();

      return this.sortDirection === 'asc' ? valA - valB : valB - valA;
    });

    return filtered;
  }

  onDeleteAnnonce(id: number) {
    this.annonces = this.annonces.filter(a => a.id !== id);
  }

  goToAnnonce(id: number) {
    this.router.navigate(['/annonce', id]);
  }
}
