import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AnnonceService, Annonce } from '../services/annonce.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-annonce-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],  // <-- ajoute RouterModule ici
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.scss']
})
export class AnnonceDetailComponent implements OnInit {
  annonce: Annonce | undefined;

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.annonceService.getAnnonceById(id).subscribe(a => this.annonce = a);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
